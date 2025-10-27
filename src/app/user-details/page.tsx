"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase"; // make sure this path is correct

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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (checkingAuth) return;
    setLoading(true);

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error("Not authenticated. Please login.");

      const token = await currentUser.getIdToken();

      const url = `${API_BASE}/api/users`;
      console.log("POST ->", url);
      console.log("Payload:", user);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // include credentials in case server expects cookies (CORS credentials)
        credentials: "include",
        body: JSON.stringify(user),
      });

      // Network-level failure (e.g. server down / CORS preflight blocked) will throw before here
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        let message = `Server returned ${res.status}`;
        try {
          // try parse json
          const json = JSON.parse(text || "{}");
          message = json.error || json.message || message;
        } catch {
          if (text) message = text;
        }
        throw new Error(message);
      }

      // success
      router.push("/dashboard");
    } catch (err: any) {
      // distinguish network errors from server errors
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        // This typically means CORS, network, or server not running
        console.error("Network/Fetch error:", err);
        alert(
          "Network error: Failed to reach backend. Check backend is running and CORS is enabled. See console for details."
        );
      } else {
        console.error("Error saving profile:", err);
        alert("Error saving profile: " + (err.message || String(err)));
      }
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
        <p className="text-center text-gray-600 mb-8 text-sm">
          Enter your details to personalize your experience
        </p>

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
