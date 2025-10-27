export default function Alerts() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-3">
        <div className="p-3 border rounded-lg text-yellow-700 bg-yellow-50">
          Heart rate slightly elevated during last exercise session
          <p className="text-xs text-gray-500">2 hours ago</p>
        </div>
        <div className="p-3 border rounded-lg text-green-700 bg-green-50">
          Daily step goal achieved: 10,000 steps
          <p className="text-xs text-gray-500">4 hours ago</p>
        </div>
      </div>
    </div>
  );
}
