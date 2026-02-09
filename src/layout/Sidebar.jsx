import React from "react";
import { Link, useLocation } from "react-router-dom";

const link = () => {
  return [
    { name: "Dashboard", to: "/" },
    { name: "Student", to: "/student" },
    { name: "Room", to: "/room" },
    { name: "Payment", to: "/payment" },
  ];
};

const Sidebar = () => {
  const navlink = link();
  const location = useLocation();
  return (
    <div className="min-h-screen w-60 px-10 bg-white shadow-xl box-border fixed  left-0  top-0 ">
      <nav className="flex flex-col justify-center items-center gap-15 text-2xl font-tinos text-blue-600 fixed z-50 px-5 py-55 ">
        {navlink.map((item, index) => {
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={index}
              to={item.to}
              className={`px-6 py-2 rounded-md duration-150 transition-colors
        ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-blue-600 hover:text-white hover:bg-blue-500"
        }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
