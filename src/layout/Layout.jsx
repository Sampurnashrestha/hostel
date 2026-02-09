import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "../pages/Dashboard";
import Room from "../pages/Room";
import Payment from "../pages/Payment";
import Student from "../pages/Student";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap gap-10">
        <div>
          <Sidebar />
        </div>

        <div className="pl-60 py-20">
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
