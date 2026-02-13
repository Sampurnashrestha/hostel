import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DeleteStudent = ({ message = "Removed Student" }) => {
  return (
    <div className="fixed top-18 right-5 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-in">
      <FaCheckCircle className="text-red-500 text-xl" />
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default DeleteStudent;
