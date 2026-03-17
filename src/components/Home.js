import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
  <div>
    <div className="h-[calc(100vh-80px)] bg-gradient-to-r from-blue-100 to-indigo-200 p-6 pt-20">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10">
        Attendance Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Add Student */}
        <div 
          onClick={() => handleNavigate("/addstudent")}
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Add Student
          </h2>
          <p className="text-gray-500 text-sm">
            Register new students into the system
          </p>
        </div>

        {/* View Students */}
        <div 
          onClick={() => handleNavigate("/viewstudent")}
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            View Students
          </h2>
          <p className="text-gray-500 text-sm">
            See all registered students
          </p>
        </div>

        {/* Take Attendance */}
        <div 
          onClick={() => handleNavigate("/takeattedance")}
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold text-yellow-600 mb-2">
            Take Attendance
          </h2>
          <p className="text-gray-500 text-sm">
            Mark daily attendance easily
          </p>
        </div>

        {/* Generate Report */}
        <div 
          onClick={() => handleNavigate("/report")}
          className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            Generate Report
          </h2>
          <p className="text-gray-500 text-sm">
            View attendance reports
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;