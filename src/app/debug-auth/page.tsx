"use client";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function DebugAuth() {
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) console.log("✅ Logged in user UID:", user.uid);
      else console.log("⚠️ No user logged in");
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center text-lg">
      Open your console to see Firebase auth status.
    </div>
  );
}
