import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI; // from your .env file
const dbName = "beatawareDB";        // replace with your database name
const collectionName = "songs";      // replace with the collection where you created the search index

async function checkIndex() {
  const client = new MongoClient(uri);

  try {
    console.log("🔍 Connecting to MongoDB...");
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch all indexes (normal + search)
    const indexes = await collection.indexes();

    console.log("✅ Existing Indexes:");
    console.table(indexes);

  } catch (error) {
    console.error("❌ Error checking index:", error);
  } finally {
    await client.close();
  }
}

checkIndex();
