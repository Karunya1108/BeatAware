// backend/routes/saveUser.cjs
const express = require("express");
const router = express.Router();

module.exports = (db) => {
  if (!db) throw new Error("saveUser route requires db instance");

  const usersCollection = db.collection("users");

  // POST /api/save-user
  router.post("/", async (req, res) => {
    try {
      // Capture client IP (supports proxies)
      const forwarded = req.headers["x-forwarded-for"];
      const ip = Array.isArray(forwarded)
        ? forwarded[0]
        : typeof forwarded === "string"
        ? forwarded.split(",")[0].trim()
        : req.ip || (req.connection && req.connection.remoteAddress) || "";

      const normalizedIp = (ip || "")
        .replace(/^::ffff:/, "")
        .replace(/^::1$/, "127.0.0.1");

      // Destructure and validate body
      const { uid, firstName, lastName, email, phone, ...rest } = req.body;

      if (!uid) {
        return res.status(400).json({ success: false, error: "UID is required" });
      }

      // Build the user profile
      const profile = {
        uid,
        firstName,
        lastName,
        email,
        phone,
        ip: normalizedIp,
        ...rest,
        updatedAt: new Date(),
      };

      // Insert or update if exists (avoids duplicate key errors)
      const result = await usersCollection.updateOne(
        { uid },
        { $set: profile, $setOnInsert: { createdAt: new Date() } },
        { upsert: true }
      );

      return res.status(201).json({
        success: true,
        message: result.upsertedCount
          ? "User created successfully"
          : "User updated successfully",
      });
    } catch (err) {
      console.error("POST /api/save-user error:", err);

      if (err.code === 11000) {
        return res.status(409).json({ success: false, error: "User already exists" });
      }

      return res.status(500).json({ success: false, error: err.message });
    }
  });

  return router;
};
