import React, { useEffect, useState } from "react";

import axios from "axios";
function ViewStudents() {

  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/app/addattedence/")
    .then(res=>setData(res.data))
  },[])
  return (
    <div className="h-[calc(100vh-80px)] bg-gray-100 p-8">
      
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Student Details
      </h1>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Technology</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Phone Number</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d)=>(
            <tr className="border-b hover:bg-gray-100 transition">
              <td className="py-3 px-4">{d.technology}</td>
              <td className="py-3 px-4">{d.name}</td>
              <td className="py-3 px-4">{d.phone_number}</td>
              <td className="py-3 px-4">{d.email}</td>

              <td className="py-3 px-4 text-center">
                <div className="flex justify-center gap-3">
                  
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                    Delete
                  </button>

                  <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">
                    Edit
                  </button>

                </div>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ViewStudents;
