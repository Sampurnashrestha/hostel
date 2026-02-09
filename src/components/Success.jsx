import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Success = ({ message = "Payment Successful" }) => {
  return (
    <div className="fixed top-30 right-5 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-in">
      <FaCheckCircle className="text-green-500 text-xl" />
      <p className="font-semibold">{message}</p>
    </div>
  );
};

export default Success;
