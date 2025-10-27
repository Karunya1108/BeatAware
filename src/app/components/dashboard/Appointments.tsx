export default function Appointments() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border rounded-lg">
          <p className="font-medium">Dr. Sarah Johnson</p>
          <p className="text-sm text-gray-500">Cardiologist</p>
          <p className="text-xs text-gray-400">Tomorrow at 2:00 PM</p>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="font-medium">Dr. Michael Chen</p>
          <p className="text-sm text-gray-500">General Medicine</p>
          <p className="text-xs text-gray-400">Friday at 10:30 AM</p>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow">
          View Detailed Analytics
        </button>
        <button className="px-4 py-2 rounded-lg border shadow">
          Schedule Appointment
        </button>
        <button className="px-4 py-2 rounded-lg border shadow">
          Export Health Data
        </button>
      </div>
    </div>
  );
}
