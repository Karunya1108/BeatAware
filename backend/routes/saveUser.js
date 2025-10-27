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
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
const mongoURI = process.env.MONGO_URI;
const client = new MongoClient(mongoURI);

async function startServer() {
  try {
    await client.connect();
    const db = client.db("beatawareDB");
    console.log("✅ MongoDB connected successfully!");

    // Import route
    const saveUserRoute = require("./routes/saveUser")(db);

    // Use route
    app.use("/api/save-user", saveUserRoute);

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
}

startServer();
