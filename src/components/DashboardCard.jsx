import React from "react";

const DashboardCard = ({
  totalAvailableBeds,
  totalBed,
  totalOccupiedBeds,
  totalPayment,
  totalRoom,
  totalStudents,
  totalUnpaid,
}) => {
  return (
    <div className="grid grid-cols-4 gap-8 max-w-5xl">
      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <h3 className="text-xl font-bold ">Total Student</h3>
        <p className="text-xl  font-semibold text-blue-700">{totalStudents}</p>
      </div>

      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <h3 className="text-xl font-bold ">Total Room</h3>
        <p className="text-xl  font-semibold text-blue-700">{totalRoom}</p>
      </div>
      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <h3 className="text-xl font-bold ">Total Bed</h3>
        <p className="text-xl  font-semibold text-blue-700">{totalBed}</p>
      </div>

      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <h3 className="text-xl font-bold ">Total Available Beds</h3>
        <p className="text-xl  font-semibold text-green-500 ">
          {totalAvailableBeds}
        </p>
      </div>

      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <h3 className="text-xl font-bold ">Total Occupied Beds</h3>
        <p className="text-xl  font-semibold text-red-400 ">
          {totalOccupiedBeds}
        </p>
      </div>

      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <h3 className="text-xl font-bold ">Total Paid Amount</h3>
        <p className="text-xl  font-semibold text-green-400 ">{totalPayment}</p>
      </div>
      <div className="p-8 shadow-xl flex justify-center items-center flex-col gap-3 rounded hover:scale-105 hover:shadow-2xl transition-transform duration-300 ">
        <h3 className="text-xl font-bold ">Total Unpaid Amount</h3>
        <p className="text-xl  font-semibold text-red-400 ">{totalUnpaid}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
