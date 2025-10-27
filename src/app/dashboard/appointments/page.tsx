// page.tsx (Server Component)
import React from "react";
import MapWrapper from "./MapWrapper";
import BottomNav from "@/app/components/BottomNav";

export default function AppointmentsPage() {
  // sample appointment data (can later come from MongoDB or Firebase)
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Ananya Sharma",
      hospital: "City Care Hospital",
      date: "28 Oct 2025",
      time: "10:30 AM",
      status: "Confirmed",
      department: "Cardiology",
    },
    {
      id: 2,
      doctor: "Dr. Priya Menon",
      hospital: "Green Valley Clinic",
      date: "30 Oct 2025",
      time: "3:15 PM",
      status: "Pending",
      department: "General Checkup",
    },
   
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-3xl font-bold text-white">Appointments</h2>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          + Make Appointment
        </button>
      </div>

      {/* Appointments List */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold text-black mb-4">Upcoming</h2>

        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 py-4 last:border-b-0"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-700">
                {appt.doctor}
              </h3>
              <p className="text-sm text-gray-600">{appt.department}</p>
              <p className="text-sm text-gray-500 mt-1">
                {appt.hospital}
              </p>
              <p className="text-sm text-gray-500">
                {appt.date} • {appt.time}
              </p>
              <span
                className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${
                  appt.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {appt.status}
              </span>
            </div>

            <button className="mt-3 sm:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold text-black mb-3">Nearest Hospital</h2>
        <MapWrapper />
      </div>

      <BottomNav />
    </div>
  );
}
