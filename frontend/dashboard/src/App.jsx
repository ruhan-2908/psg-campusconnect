import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Marks from "./pages/Marks";
import Prediction from "./pages/Prediction";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">CampusConnect</h2>
        <nav className="space-y-4">
          <Link to="/" className="block hover:bg-blue-600 p-2 rounded">Dashboard</Link>
          <Link to="/marks" className="block hover:bg-blue-600 p-2 rounded">Marks</Link>
          <Link to="/prediction" className="block hover:bg-blue-600 p-2 rounded">Predictions</Link>
          <Link to="/analysis" className="block hover:bg-blue-600 p-2 rounded">Analysis</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
