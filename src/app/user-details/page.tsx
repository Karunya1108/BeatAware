"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase"; // ✅ adjust if firebase.js is in another folder
import { onAuthStateChanged } from "firebase/auth";

type UserProfile = {
  uid?: string;
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
    uid: "",
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

  // ✅ use .env.local variable if available, else default localhost:5000
  const API_BASE =
    (process.env.NEXT_PUBLIC_API_BASE as string) || "http://127.0.0.1:5000";

  // ✅ detect Firebase user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        setCheckingAuth(false);
        return;
      }
      setUser((prev) => ({
        ...prev,
        uid: currentUser.uid,
        email: currentUser.email || "",
      }));
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, [router]);

  // ✅ handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ parse text safely
  const parseResponseTextSafely = async (res: Response) => {
    const text = await res.text().catch(() => "");
    if (!text) return null;
    try {
      return JSON.parse(text);
    } catch {
      return text;
    }
  };

  // ✅ main form submit
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (checkingAuth) return;
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (!user.uid) {
        setErrorMsg("UID is required — please ensure you're logged in.");
        setLoading(false);
        return;
      }

      const token = await auth.currentUser?.getIdToken();

      const res = await fetch(`${API_BASE}/api/save-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(user),
      });

      const parsed = await parseResponseTextSafely(res);
      if (!res.ok) {
        const msg =
          typeof parsed === "string"
            ? parsed
            : parsed?.error || parsed?.message || "Error saving user";
        setErrorMsg(msg);
        setLoading(false);
        return;
      }

      setSuccessMsg("Profile saved successfully! Redirecting...");
      console.log("✅ Saved:", parsed);
      setTimeout(() => router.push("/dashboard"), 1200);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        "Network error — check if backend is running on port 5000 and CORS is allowed."
      );
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-800">
        Checking authentication...
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

        {/* Error + Success Messages */}
        {errorMsg && (
          <div className="mb-4 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-2 text-sm">
            {errorMsg}
            <div className="mt-2 text-xs text-gray-600">
              Tips: make sure <code>API_BASE</code> matches your backend port and CORS origin.
            </div>
          </div>
        )}
        {successMsg && (
          <div className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-5">
          {[
            "firstName",
            "lastName",
            "dob",
            "age",
            "email",
            "phone",
            "city",
            "address",
            "emergencyContact",
            "bloodGroup",
          ].map((field) => (
            <input
              key={field}
              type={
                field === "dob"
                  ? "date"
                  : field === "email"
                  ? "email"
                  : field === "age" || field === "phone"
                  ? "number"
                  : "text"
              }
              name={field}
              placeholder={
                field === "bloodGroup"
                  ? "Blood Group (e.g., O+, A-)"
                  : field.charAt(0).toUpperCase() + field.slice(1)
              }
              value={(user as any)[field]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium"
              required
            />
          ))}

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
