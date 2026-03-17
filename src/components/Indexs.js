import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Indexs() {
  const token=localStorage.getItem("token")
  const Navigate=useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem('token')
    Navigate("/")
  }
  return (
    <div className="bg-gray-100">
      
      {/* Header */}
      <h1 className="bg-gray-700 text-white text-center text-3xl md:text-3xl font-bold py-4 shadow-md">
        Attendance Management System
        {token&& <button
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 float-right mx-10 rounded-lg text-sm md:text-base"
      onClick={handlelogout}
    >logout</button>}

      </h1>

      {/* Page Content */}
      <div>
        <Outlet />
      </div>

    </div>
  )
}