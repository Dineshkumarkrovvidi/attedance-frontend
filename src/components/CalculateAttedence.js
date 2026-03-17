import React, { useEffect, useState } from "react";

import axios from "axios";
export default function CalculateAttedence() {
  const [techinput, setTech] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data,setData]=useState([])

useEffect(
  ()=>{
    axios
        .get(" https://attedance-backend.onrender.com/data/takeattedence/")
        .then(res=>setData(res.data))
},[])
  // 1. FILTER DATA
  const report = data.filter((d) =>
    (fromDate === "" || d.date >= fromDate) &&
    (toDate === "" || d.date <= toDate) &&
    (techinput === "" || d.technology === techinput) &&
    d.status === "present"
  );

  // 2. GROUP + COUNT
  const summary = {};

  report.forEach((d) => {
    if (!summary[d.name]) {
      summary[d.name] = {
        technology: d.technology,
        name: d.name,
        days: 0,
      };
    }
    summary[d.name].days += 1;
  });

  const finalReport = Object.values(summary);

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Generate Attendance Report
      </h1>

      {/* FILTERS */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* FROM DATE */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              From
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* TO DATE */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              To
            </label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            />
            
          </div>

          {/* TECHNOLOGY */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Technology
            </label>
            <select
              value={techinput}
              onChange={(e) => setTech(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">-- Select One --</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="react">React</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
          <button>dowload report</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4">Technology</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">No. of Days Present</th>
            </tr>
          </thead>

          <tbody>
            {finalReport.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No Data Found
                </td>
              </tr>
            ) : (
              finalReport.map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{d.technology}</td>
                  <td className="py-3 px-4">{d.name}</td>
                  <td className="py-3 px-4">{d.days}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

