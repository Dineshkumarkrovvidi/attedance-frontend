import React, { useState } from "react";
import axios from "axios";
export default function InsertDetails() {
  const [Technology, setTech] = useState("");
  const [sname, setSname] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
const student = {
  technology: Technology,
  name: sname,
  phone_number: phoneno,
  email: email
};
   axios.post(" https://attedance-backend.onrender.com/app/addattedence/", student)
   .then(res=>console.log(res.data))
    console.log(student);

    alert("Student Added Successfully");

    clearForm();
  };

  const clearForm = () => {
    setTech("");
    setSname("");
    setPhoneno("");
    setEmail("");
  };



  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-r from-indigo-100 to-blue-200 flex items-center justify-center">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Add Student
        </h2>

        <form onSubmit={handlesubmit}>

        {/* Technology */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Technology
          </label>

          <select
            value={Technology}
            onChange={(e)=>setTech(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">-- Select One --</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="testing">Testing</option>
            <option value="data science">Data Science</option>
          </select>
        </div>

        {/* Student Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Student Name
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={sname}
            onChange={(e)=>setSname(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>

          <input
            type="number"
            placeholder="Enter phone number"
            value={phoneno}
            onChange={(e)=>setPhoneno(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Save
          </button>

          <button
            type="button"
            onClick={clearForm}
            className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
          >
            Clear
          </button>
        </div>

        </form>
      </div>
    </div>
  );
}