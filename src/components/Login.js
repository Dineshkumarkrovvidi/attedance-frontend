import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
      const Navigate=useNavigate();
      const user="dinesh";
      const pass="dinesh14";
      const [uname,setUname]=useState("")
      const [pwd,setPwd]=useState("")
      const [message,setMessage]=useState("")
    
      
useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    Navigate("/main");
  }
}, []);
    const handlelogin= async(e)=>{
        e.preventDefault();
        try{
        const res= await axios.post("http://127.0.0.1:8000/auth/login/",{username:uname,password:pwd})
         console.log(res.data)
          Navigate('/dashboard/main')   
        localStorage.setItem("token", res.data.access);
    }
    catch{
            setMessage("invalid username or password")
        }

    }
  return (
    <div>
         <h1 className="bg-gray-700 text-white text-center text-3xl md:text-3xl font-bold py-4 shadow-md">
        Attendance Management System
      </h1>
    <div className="h-[calc(100vh-80px)]  flex items-center justify-center px-3 bg-gradient-to-r from-green-400 to-blue-500">
     

      <div className="bg-white p-5 rounded-2xl shadow-lg w-full max-w-md">
        
    

        <form className="flex flex-col gap-4">
           <span style={{color:"red"}}>{message}</span>
          <div>
            <label className="block text-gray-600 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={uname}
              name="uname"
              onChange={(e)=>setUname(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={pwd}
              name="pwd"
              onChange={(e)=>setPwd(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <input
            type="submit"
            value="Login"
            onClick={handlelogin}
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer transition duration-300"
          />

          <button
            type="button"
            className="text-blue-500 hover:underline text-sm text-center"
          >
            Forgot Password?
          </button>

        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;