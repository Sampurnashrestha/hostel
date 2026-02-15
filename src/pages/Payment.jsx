import React, { useState } from "react";
import { mockStudent } from "../mockData/mockData";
import PaymentTable from "../components/PaymentTable";
import Success from "../components/Success";

const heading = [
  "Student",
  "Room",
  "Amount(per month)",
  "paid",
  "pending",
  "Action",
];
const Payment = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [status, setStatus] = useState("All");

  const handlePay = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const rooms = ["All", ...new Set(mockStudent.map((s) => s.room))];

  const filterStudent = mockStudent.filter((s) => {
    const roomMatch = selectedRoom === "All" || s.room === selectedRoom;

    const statusMatch =
      status == "All" ||
      (status === "Paid" && s.pending === 0) ||
      (status === "Unpaid" && s.pending > 0);

    return roomMatch && statusMatch;
  });

  return (
    <div className="p-6 px-25   ">
      <div className="flex items-center justify-between">
        <h1 className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-5xl font-extrabold font-tinos py-4 ">
          Payment
        </h1>

        <div className="flex gap-2">
          
            <select
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="border  border-blue-300 text-blue-500 font-semibold px-2 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {rooms.map((room, index) => (
                <option key={index} value={room}>
                  {room === "All" ? "All Rooms" : `Room ${room}`}
                </option>
              ))}
            </select>
          
          
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-blue-300 text-blue-500 font-semibold px-2 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
        
      </div>

      {showSuccess && <Success />}
      <PaymentTable
        student={filterStudent}
        headings={heading}
        onPay={handlePay}
      />
    </div>
  );
};

export default Payment;
