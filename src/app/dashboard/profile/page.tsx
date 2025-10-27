"use client";
import { useState } from "react";
import { FaUser, FaHeartbeat, FaNotesMedical, FaPills, FaPlus, FaEdit, FaSave } from "react-icons/fa";
import BottomNav from "@/app/components/BottomNav";

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);

  // Conditions state
  const [conditions, setConditions] = useState([
    { name: "Hypertension", year: "2020" },
    { name: "Type 2 Diabetes", year: "2019" },
  ]);
  const [newCondition, setNewCondition] = useState({ name: "", year: "" });
  const [showConditionForm, setShowConditionForm] = useState(false);

  // Medications state
  const [medications, setMedications] = useState([
    { name: "Lisinopril", details: "10mg – Once daily" },
    { name: "Metformin", details: "500mg – Twice daily" },
  ]);
  const [newMedication, setNewMedication] = useState({
    name: "",
    timing: "",
    days: "",
  });
  const [showMedicationForm, setShowMedicationForm] = useState(false);

  // Add new condition
  const addCondition = () => {
    if (newCondition.name && newCondition.year) {
      setConditions([...conditions, newCondition]);
      setNewCondition({ name: "", year: "" });
      setShowConditionForm(false);
    }
  };

  // Add new medication
  const addMedication = () => {
    if (newMedication.name && newMedication.timing && newMedication.days) {
      setMedications([
        ...medications,
        {
          name: newMedication.name,
          details: `${newMedication.timing}, ${newMedication.days} days`,
        },
      ]);
      setNewMedication({ name: "", timing: "", days: "" });
      setShowMedicationForm(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 p-6">
      {/* Full width content like History page */}
      <div className="w-full space-y-6 flex-1">
        
        {/* Header with Edit/Save Button */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-100"
          >
            {editMode ? <FaSave /> : <FaEdit />}
            {editMode ? "Save" : "Edit"}
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-black">
            <FaUser className="text-blue-600" /> Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-black">First Name</label>
              <input
                type="text"
                defaultValue="John"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Last Name</label>
              <input
                type="text"
                defaultValue="Doe"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Email Address</label>
              <input
                type="email"
                defaultValue="johndoe@email.com"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Phone Number</label>
              <input
                type="text"
                defaultValue="+1 (555) 123-4567"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Date of Birth</label>
              <input
                type="text"
                defaultValue="15/05/1990"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-black">Address</label>
              <input
                type="text"
                defaultValue="123 Main St, City, State 12345"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-black">Emergency Contact</label>
              <input
                type="text"
                defaultValue="Jane Doe - (555) 987-6543"
                disabled={!editMode}
                className="w-full mt-1 p-2 border rounded-md disabled:bg-gray-100 text-black"
              />
            </div>
          </div>
        </div>

        {/* Medical Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-black">
            <FaHeartbeat className="text-purple-600" /> Medical Summary
          </h2>
          <div className="mt-4 space-y-2 text-black">
            <p><strong>Blood Type:</strong> O+</p>
            <p className="flex items-center gap-2">
              <strong>Known Allergies:</strong>
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-sm">Peanuts</span>
              <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md text-sm">Peas</span>
            </p>
            <p><strong>Heart Rate:</strong> 72 bpm</p>
            <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
            <p><strong>Weight:</strong> 175 lbs</p>
          </div>
        </div>

        {/* Medical Conditions */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-black">
              <FaNotesMedical className="text-red-500" /> Medical Conditions
            </h2>
            {editMode && (
              <button
                onClick={() => setShowConditionForm(!showConditionForm)}
                className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                <FaPlus /> Add Condition
              </button>
            )}
          </div>
          {showConditionForm && (
            <div className="mt-4 flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Diagnosis"
                value={newCondition.name}
                onChange={(e) => setNewCondition({ ...newCondition, name: e.target.value })}
                className="p-2 border rounded-md text-black flex-1 min-w-[150px]"
              />
              <input
                type="text"
                placeholder="Year"
                value={newCondition.year}
                onChange={(e) => setNewCondition({ ...newCondition, year: e.target.value })}
                className="p-2 border rounded-md text-black w-32"
              />
              <button
                onClick={addCondition}
                className="bg-green-500 text-white px-3 rounded-md"
              >
                Save
              </button>
            </div>
          )}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {conditions.map((cond, i) => (
              <div key={i} className="p-3 border rounded-md bg-gray-50 text-black">
                <p className="font-medium">{cond.name}</p>
                <p className="text-sm text-gray-600">Diagnosed: {cond.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Medications */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center gap-2 text-black">
              <FaPills className="text-green-600" /> Current Medications
            </h2>
            {editMode && (
              <button
                onClick={() => setShowMedicationForm(!showMedicationForm)}
                className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-md"
              >
                <FaPlus /> Add Medication
              </button>
            )}
          </div>
          {showMedicationForm && (
            <div className="mt-4 flex gap-2 flex-wrap">
              <input
                type="text"
                placeholder="Medicine"
                value={newMedication.name}
                onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                className="p-2 border rounded-md text-black flex-1 min-w-[120px]"
              />
              <input
                type="text"
                placeholder="Before/After food"
                value={newMedication.timing}
                onChange={(e) => setNewMedication({ ...newMedication, timing: e.target.value })}
                className="p-2 border rounded-md text-black flex-1 min-w-[150px]"
              />
              <input
                type="text"
                placeholder="Days"
                value={newMedication.days}
                onChange={(e) => setNewMedication({ ...newMedication, days: e.target.value })}
                className="p-2 border rounded-md text-black w-28"
              />
              <button
                onClick={addMedication}
                className="bg-blue-500 text-white px-3 rounded-md"
              >
                Save
              </button>
            </div>
          )}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {medications.map((med, i) => (
              <div key={i} className="p-3 border rounded-md bg-gray-50 text-black">
                <p className="font-medium">{med.name}</p>
                <p className="text-sm text-gray-600">{med.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Shared Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
