import React, { useEffect, useState } from "react";

/**
 * Uploaded college image (use for background if you want):
 * '/mnt/data/2a11adbb-7195-40fe-8761-b2ac1b0a316e.png'
 *
 * Example usage in a parent wrapper:
 * const bg = `url('/mnt/data/2a11adbb-7195-40fe-8761-b2ac1b0a316e.png')`;
 * <div style={{ backgroundImage: bg, backgroundSize: 'cover', filter: 'blur(6px)' }} />
 *
 * (Your environment/tooling may require a 'sandbox:' prefix when converting local path to a served URL.)
 */

const MAX = {
  ca: 30,
  mcq: 10,
  at: 5,
};

const initialSubjects = [
  { name: "Linear Algebra", ca1: 26, ca2: 28, mcq1: 8, mcq2: 9, at1: 4, at2: 5 },
  { name: "Discrete Structures", ca1: 24, ca2: 27, mcq1: 7, mcq2: 8, at1: 5, at2: 4 },
  { name: "Engineering Economics", ca1: 25, ca2: 26, mcq1: 8, mcq2: 9, at1: 4, at2: 4 },
  { name: "COA", ca1: 27, ca2: 29, mcq1: 9, mcq2: 9, at1: 5, at2: 5 },
];

function clampNumber(value, max) {
  const n = Number(value);
  if (Number.isNaN(n)) return 0;
  if (n < 0) return 0;
  if (n > max) return max;
  // round to 2 decimals to avoid weird floats
  return Math.round(n * 100) / 100;
}

function computeInternal(subject) {
  // Using formula: ((CA1+CA2)/2) + ((MCQ1+MCQ2)/2) + (AT1+AT2)
  // This raw total is out of 50
  const caPart = (subject.ca1 + subject.ca2) / 2.0;
  const mcqPart = (subject.mcq1 + subject.mcq2) / 2.0;
  const atPart = subject.at1 + subject.at2;
  const raw = caPart + mcqPart + atPart;
  // ensure proper rounding
  const rawRounded = Math.round(raw * 100) / 100;
  return rawRounded;
}

function convertTo40(rawOutOf50) {
  // Converted = (raw / 50) * 40
  const conv = (rawOutOf50 / 50) * 40;
  return Math.round(conv * 100) / 100;
}

function scoreColor(converted) {
  // Green: >= 32 (80% of 40), Yellow: >= 24, Red: else
  if (converted >= 32) return "bg-green-500 text-white";
  if (converted >= 24) return "bg-yellow-400 text-black";
  return "bg-red-500 text-white";
}

export default function Marks() {
  // load from localStorage if present
  const [subjects, setSubjects] = useState(() => {
    try {
      const raw = localStorage.getItem("marks_v1");
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore parse errors
    }
    return initialSubjects;
  });

  // persist on change
  useEffect(() => {
    localStorage.setItem("marks_v1", JSON.stringify(subjects));
  }, [subjects]);

  const handleChange = (idx, key, rawVal, maxVal) => {
    const val = clampNumber(rawVal, maxVal);
    setSubjects((prev) => {
      const copy = prev.map((s) => ({ ...s }));
      copy[idx][key] = val;
      return copy;
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Marks</h2>

      <div className="space-y-6">
        {subjects.map((subj, idx) => {
          const rawTotal = computeInternal(subj); // out of 50
          const converted = convertTo40(rawTotal); // out of 40
          return (
            <div
              key={idx}
              className="bg-white shadow rounded-lg p-5 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{subj.name}</h3>
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full ${scoreColor(converted)}`}>
                    {converted} / 40
                  </div>
                  <div className="text-sm text-gray-500">Raw: {rawTotal} / 50</div>
                </div>
              </div>

              {/* Inputs grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* CA columns */}
                <div className="p-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CA-1 (max {MAX.ca})</label>
                  <input
                    type="number"
                    className="w-28 p-2 border rounded"
                    min="0"
                    max={MAX.ca}
                    value={subj.ca1}
                    onChange={(e) => handleChange(idx, "ca1", e.target.value, MAX.ca)}
                  />
                </div>

                <div className="p-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">CA-2 (max {MAX.ca})</label>
                  <input
                    type="number"
                    className="w-28 p-2 border rounded"
                    min="0"
                    max={MAX.ca}
                    value={subj.ca2}
                    onChange={(e) => handleChange(idx, "ca2", e.target.value, MAX.ca)}
                  />
                </div>

                {/* MCQ columns */}
                <div className="p-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">MCQ-1 (max {MAX.mcq})</label>
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    min="0"
                    max={MAX.mcq}
                    value={subj.mcq1}
                    onChange={(e) => handleChange(idx, "mcq1", e.target.value, MAX.mcq)}
                  />
                </div>

                <div className="p-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">MCQ-2 (max {MAX.mcq})</label>
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    min="0"
                    max={MAX.mcq}
                    value={subj.mcq2}
                    onChange={(e) => handleChange(idx, "mcq2", e.target.value, MAX.mcq)}
                  />
                </div>

                {/* AT columns */}
                <div className="p-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">AT-1 (max {MAX.at})</label>
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    min="0"
                    max={MAX.at}
                    value={subj.at1}
                    onChange={(e) => handleChange(idx, "at1", e.target.value, MAX.at)}
                  />
                </div>

                <div className="p-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">AT-2 (max {MAX.at})</label>
                  <input
                    type="number"
                    className="w-20 p-2 border rounded"
                    min="0"
                    max={MAX.at}
                    value={subj.at2}
                    onChange={(e) => handleChange(idx, "at2", e.target.value, MAX.at)}
                  />
                </div>
              </div>

              {/* Visual progress bars */}
              <div className="mt-4 grid grid-cols-1 gap-2">
                <div className="text-sm text-gray-600 mb-2">Visual breakdown (scaled to each component)</div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">CA (avg of CA1 & CA2) — max 30</div>
                    <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
                      <div
                        className="h-3 bg-indigo-600"
                        style={{ width: `${(( (subj.ca1 + subj.ca2) / 2 ) / 30) * 100}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {((subj.ca1 + subj.ca2) / 2).toFixed(2)} / 30
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-1">MCQ (avg) — max 10</div>
                    <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
                      <div
                        className="h-3 bg-emerald-500"
                        style={{ width: `${(((subj.mcq1 + subj.mcq2) / 2) / 10) * 100}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {((subj.mcq1 + subj.mcq2) / 2).toFixed(2)} / 10
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-1">AT (sum) — max 10</div>
                    <div className="w-full bg-gray-200 h-3 rounded overflow-hidden">
                      <div
                        className="h-3 bg-yellow-500"
                        style={{ width: `${((subj.at1 + subj.at2) / 10) * 100}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {(subj.at1 + subj.at2).toFixed(2)} / 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-6 flex gap-3">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded shadow"
          onClick={() => {
            // reset to initial
            setTimeout(() => {
              localStorage.removeItem("marks_v1");
              window.location.reload();
            }, 10);
          }}
          title="Reset to sample values"
        >
          Reset to sample
        </button>

        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded shadow"
          onClick={() => {
            // export JSON
            const data = JSON.stringify(subjects, null, 2);
            const blob = new Blob([data], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "marks-export.json";
            a.click();
            URL.revokeObjectURL(url);
          }}
        >
          Export JSON
        </button>
      </div>
    </div>
  );
}

