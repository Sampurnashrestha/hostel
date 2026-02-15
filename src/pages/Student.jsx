import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import StudentTable from "../components/StudentTable";
import AddStudentModal from "../components/AddStudentModal";
import Room from "./Room";
import { mockStudent } from "../mockData/mockData";
import DeleteStudent from "../components/DeleteStudent";

const head = ["Name", "Email", "Age", "Room", "Address", "Paid", "Pending","Action"];


const Student = () => {
  const [showModel, setShowModel] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("All")
  const [deleteStudent, setDeleteStudent] = useState(false);

  const handleDelete =()=>{
    setDeleteStudent(true)
    setTimeout(()=>setDeleteStudent(false),3000)
  }

  const rooms = ["All", ...new Set(mockStudent.map((s) => s.room))];
  
    const filterStudent = mockStudent.filter((s) => {
      const roomMatch = selectedRoom === "All" || s.room === selectedRoom;
  
  
  
      return roomMatch ;
    });
  return (
    <div className="min-h-screen p-6 px-25">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Student
          </h1>
          
          <div className="flex items-center gap-2">
            <input
            placeholder="Search..."
            className="border border-gray-300 grow px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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
          </div>
        </div>
        

        <div className="bg-linear-to-r from-blue-500 to-purple-500 px-4 py-3 text-white rounded-xl">
          <button onClick={() => setShowModel(true)} className="flex justify-center items-center gap-1">
            <FaPlus /> Add Student
          </button>
        </div>
      </div>

      <StudentTable student={filterStudent} heading={head} onDelete={handleDelete} />

   
      {deleteStudent && <DeleteStudent />}
      {showModel && <AddStudentModal onClose={() => setShowModel(false)} />}
    </div>
  );
};

export default Student;
