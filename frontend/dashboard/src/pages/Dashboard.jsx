import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  // Dummy subjects data (same for Marks page)
  const data = [
    { subject: "Maths", marks: 85 },
    { subject: "DS", marks: 72 },
    { subject: "DBMS", marks: 90 },
    { subject: "OS", marks: 65 },
    { subject: "DLD", marks: 78 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Student Info Card */}
      <div className="bg-white shadow-md rounded-lg p-5 mb-6">
        <h2 className="text-xl font-semibold mb-3">Student Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Reg No:</strong> 23CSE001</p>
        <p><strong>Department:</strong> CSE</p>
        <p><strong>Semester:</strong> 3</p>
      </div>

      {/* Mark Trends Graph */}
      <div className="bg-white shadow-md rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-3">Mark Trends</h2>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="marks" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
