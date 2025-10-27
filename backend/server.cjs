// server.cjs
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();

// ---------- CORS (simple local dev setup) ----------
app.use(
  cors({
    origin: ["http://localhost:3000"], // your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Handle preflight for all routes
app.options("*", cors());

// Parse JSON body
app.use(express.json());

// ---------- Firebase Admin Initialization ----------
try {
  const serviceAccountPath = path.join(__dirname, "serviceAccountKey.json");
  if (!fs.existsSync(serviceAccountPath)) {
    console.warn(
      `⚠️ serviceAccountKey.json not found at ${serviceAccountPath}. Firebase Admin will not be initialized.`
    );
  } else {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    console.log("✅ Firebase Admin initialized");
  }
} catch (err) {
  console.error("❌ Failed to initialize Firebase Admin:", err);
}

// ---------- MongoDB Connection ----------
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI not set in .env");
  process.exit(1);
}

let db;
const DB_NAME = process.env.MONGODB_DB || "beataware";
const client = new MongoClient(MONGODB_URI);

async function connectMongo() {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✅ Connected to MongoDB:", db.databaseName);

    // Mount route AFTER DB is ready
    const saveUserRoute = require("./routes/saveUser.cjs")(db);
    app.use("/api/save-user", saveUserRoute);
    console.log("✅ Mounted /api/save-user");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}
connectMongo();

// ---------- Health route ----------
app.get("/health", async (req, res) => {
  try {
    if (!db) throw new Error("No db object");
    await db.command({ ping: 1 });
    return res.status(200).json({ status: "ok", db: db.databaseName });
  } catch (err) {
    console.error("Health check failed:", err);
    return res.status(500).json({ status: "error", error: String(err) });
  }
});

// ---------- Firebase Token Verification Middleware ----------
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const idToken = authHeader.split(" ")[1];

  if (!admin.apps || admin.apps.length === 0) {
    console.warn("⚠️ Firebase Admin not initialized - token verification skipped.");
    return res.status(500).json({ error: "Server misconfiguration: auth unavailable" });
  }

  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ error: "Invalid token" });
  }
};

// ---------- Root route ----------
app.get("/", (req, res) => res.send("Backend running with Firebase Admin & MongoDB"));

// ---------- Upsert user profile ----------
app.post("/api/users", verifyToken, async (req, res) => {
  if (!db) return res.status(500).json({ error: "DB not initialized" });

  try {
    const uid = req.user.uid;
    const profile = { ...req.body, uid, updatedAt: new Date() };

    const result = await db.collection("users").updateOne(
      { uid },
      { $set: profile, $setOnInsert: { createdAt: new Date() } },
      { upsert: true }
    );

    res.status(200).json({ message: "Profile saved", result });
  } catch (err) {
    console.error("❌ Failed to save profile:", err);
    res.status(500).json({ error: "Failed to save profile" });
  }
});

// ---------- Graceful shutdown ----------
async function shutdown(signal) {
  console.log(`\nReceived ${signal} — closing MongoDB client and exiting...`);
  try {
    await client.close();
    console.log("✅ MongoDB connection closed");
  } catch (e) {
    console.warn("⚠️ Error closing MongoDB client:", e);
  }
  process.exit(0);
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

// ---------- Start server ----------
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
