import React, { useEffect, useState } from 'react'
import PreLoader from '../components/PreLoader'
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import Room from "../pages/Room";
import Payment from "../pages/Payment";
import Student from "../pages/Student";
import AdminLogin from "../login/Adminlogin";

const Layout = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === "/";

  
  const [perloading , setPerLoading] =useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setPerLoading(false)
    },2000)
  },[])

  if (perloading) return <PreLoader />
  return (
    <div>
      {!isLoginPage && <Navbar />}
      <div className="flex flex-wrap gap-10">
        <div>
          {!isLoginPage && <Sidebar />}
        </div>

        <div className="pl-60 py-20">
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/room" element={<Room />} />
            <Route path="/student" element={<Student />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
