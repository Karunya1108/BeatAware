"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase"; // ensure this path is correct for your project

type UserProfile = {
  firstName: string;
  lastName: string;
  dob: string;
  age: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  emergencyContact: string;
  bloodGroup: string;
  medicalHistory: string;
};

export default function UserDetails() {
  const router = useRouter();

  const [user, setUser] = useState<UserProfile>({
    firstName: "",
    lastName: "",
    dob: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    emergencyContact: "",
    bloodGroup: "",
    medicalHistory: "",
  });

  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Use env var if provided (set NEXT_PUBLIC_API_BASE in .env.local for Next.js)
  // Example: NEXT_PUBLIC_API_BASE=http://127.0.0.1:5000
  const API_BASE =
    (process.env.NEXT_PUBLIC_API_BASE as string) || "http://127.0.0.1:5000";

  useEffect(() => {
    // Ensure user is signed in and prefill email
    const unsubscribe = auth.onAuthStateChanged((current) => {
      if (!current) {
        router.push("/login");
        setCheckingAuth(false);
        return;
      }
      setUser((prev) => ({ ...prev, email: current.email || "" }));
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const parseResponseTextSafely = async (res: Response) => {
    // Read response as text first, then attempt JSON parse; fallback to text
    const text = await res.text().catch(() => "");
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (checkingAuth) return;
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        setErrorMsg("Not authenticated. Please log in.");
        setLoading(false);
        return;
      }

      // Try to get ID token (server may validate it)
      let token: string | null = null;
      try {
        token = await currentUser.getIdToken();
      } catch (tErr) {
        console.warn("Could not get ID token (continuing):", tErr);
      }

      // UPDATED fetch target -> /api/save-user
      const url = `${API_BASE}/api/save-user`;
      console.log("POST ->", url);
      console.log("Payload:", user);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        // If your backend expects cookies, uncomment credentials below and configure CORS
        // credentials: "include",
        body: JSON.stringify(user),
      });

      const parsed = await parseResponseTextSafely(res);
      console.log("Response status:", res.status, "body:", parsed);

      if (!res.ok) {
        // Build human-friendly message (prefer server-provided message)
        let message = `Server returned status ${res.status}`;
        if (parsed) {
          if (typeof parsed === "string") message = parsed;
          else if ((parsed as any).message) message = (parsed as any).message;
          else if ((parsed as any).error) message = (parsed as any).error;
          else message = JSON.stringify(parsed).slice(0, 500);
        }
        setErrorMsg(message);
        setLoading(false);
        return;
      }

      // success
      setSuccessMsg("Profile saved — redirecting to dashboard...");
      // optional: log success payload
      console.log("Saved profile response:", parsed);
      setTimeout(() => router.push("/dashboard"), 700);
    } catch (err: any) {
      console.error("handleSave unexpected error:", err);
      const msg =
        err instanceof TypeError && err.message === "Failed to fetch"
          ? "Network error: cannot reach backend. Check server & CORS."
          : err?.message || "Unknown error saving profile";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-6">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-1">
          Let’s Get to Know You
        </h2>
        <p className="text-center text-gray-600 mb-4 text-sm">
          Enter your details to personalize your experience
        </p>

        {/* Inline messages */}
        {errorMsg && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-2 text-sm">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={user.age}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={user.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="tel"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={user.emergencyContact}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group (e.g., O+, A-)"
            value={user.bloodGroup}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
            required
          />

          <textarea
            name="medicalHistory"
            placeholder="Medical History"
            value={user.medicalHistory}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            } bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg`}
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
