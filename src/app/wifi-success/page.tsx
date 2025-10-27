"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function WifiSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const wifiName = searchParams.get("name");

  useEffect(() => {
    // Redirect to user details page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/user-details");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Green tick */}
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />

        {/* Success text in black, not bold */}
        <p className="text-black text-lg mb-2">
          Successfully Verified
        </p>

        {wifiName && (
          <p className="text-black text-base">
            You are now connected to <span className="font-semibold">{wifiName}</span>
          </p>
        )}
      </div>
    </div>
  );
}
