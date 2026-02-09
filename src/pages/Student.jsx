import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import StudentTable from "../components/StudentTable";
import AddStudentModal from "../components/AddStudentModal";
import Room from "./Room";
import { mockStudent } from "../mockData/mockData";

const head = ["Name", "Email", "Age", "Room", "Address", "Paid", "Pending"];


const Student = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="min-h-screen p-6 px-25">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Student
          </h1>
          <input
            placeholder="Search..."
            className="border border-gray-300 grow px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="bg-linear-to-r from-blue-500 to-purple-500 px-4 py-3 text-white rounded-xl">
          <button onClick={() => setShowModel(true)} className="flex justify-center items-center gap-1">
            <FaPlus /> Add Student
          </button>
        </div>
      </div>

      <StudentTable student={mockStudent} heading={head} />

   

      {showModel && <AddStudentModal onClose={() => setShowModel(false)} />}
    </div>
  );
};

export default Student;
