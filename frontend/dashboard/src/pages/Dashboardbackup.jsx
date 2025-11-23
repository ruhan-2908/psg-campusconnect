import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-5">
        <h2 className="text-2xl font-bold mb-8">Progress Tracker</h2>
        <ul className="space-y-4 text-lg">
          <li className="hover:text-gray-200 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-200 cursor-pointer">Marks</li>
          <li className="hover:text-gray-200 cursor-pointer">Predictions</li>
          <li className="hover:text-gray-200 cursor-pointer">Analysis</li>
          <li className="hover:text-gray-200 cursor-pointer">Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Student Info */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-6">
          <h2 className="text-xl font-semibold mb-3">Student Information</h2>
          <div className="space-y-1">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Reg No:</strong> 23CSE001</p>
            <p><strong>Department:</strong> CSE</p>
            <p><strong>Semester:</strong> 3</p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Marks Trend (Dummy Box for now) */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3">Mark Trends</h2>
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart Coming Soon...</p>
            </div>
          </div>

          {/* Attendance Overview (Dummy Box) */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-3">Attendance Overview</h2>
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Attendance Graph Coming Soon...</p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;
