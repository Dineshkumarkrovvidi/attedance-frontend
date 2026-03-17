import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TakeAttendances() {

  const [students, setStudents] = useState([]);
  const [techinput, setTech] = useState("");
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    axios
      .get(" https://attedance-backend.onrender.com/app/addattedence/")
      .then((res) => setStudents(res.data));
  }, []);

  const filteredStudents = students.filter(
    (s) => s.technology === techinput
  );

  const handleStatusChange = (name, value) => {
    setAttendance({
      ...attendance,
      [name]: value
    });
  };

  const handlesave = () => {

    filteredStudents.forEach((student) => {

      const data = {
        technology: student.technology,
        name: student.name,
        date: date,
        status: attendance[student.name] || "present"
      };

      axios
        .post(" https://attedance-backend.onrender.com/takeattedence/", data)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

    });

    alert("Attendance Saved Successfully");
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Take Attendance
      </h1>

      {/* Top Controls */}

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-1">Technology</label>

            <select
              value={techinput}
              onChange={(e) => setTech(e.target.value)}
              className="w-full border p-2"
            >
              <option value="">Select</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="react">React</option>
            </select>

          </div>

          <div>
            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border p-2"
            />

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="max-w-4xl mx-auto bg-white shadow rounded">

        <table className="w-full">

          <thead className="bg-indigo-600 text-white">

            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Status</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((student) => (

              <tr key={student.id} className="border-b">

                <td className="p-3">{student.name}</td>

                <td className="p-3">

                  <select
                    onChange={(e) =>
                      handleStatusChange(student.name, e.target.value)
                    }
                    className="border p-1"
                  >
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="max-w-4xl mx-auto mt-6 text-right">

        <button
          onClick={handlesave}
          className="bg-indigo-600 text-white px-6 py-2 rounded"
        >
          Save Attendance
        </button>

      </div>

    </div>
  );
}