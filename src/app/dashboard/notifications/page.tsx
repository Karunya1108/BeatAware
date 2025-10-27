// app/dashboard/notifications/page.tsx
"use client";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 space-y-4">
        <h1 className="text-xl font-bold text-black">Notifications</h1>

        <div className="p-3 rounded-md bg-yellow-100 text-yellow-800">
          ⚠️ High Heart Rate Alert at 3:45 PM
        </div>

        <div className="p-3 rounded-md bg-blue-100 text-blue-800">
          📅 Upcoming Appointment: Oct 5, 2025 – Dr. Smith
        </div>

        <div className="p-3 rounded-md bg-green-100 text-green-800">
          💊 Medication Reminder: Metformin – 7:00 AM
        </div>
      </div>
    </div>
  );
}
