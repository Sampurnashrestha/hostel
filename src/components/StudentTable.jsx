import React from "react";
import { FaTrash } from "react-icons/fa"

const StudentTable = ({ student, heading , onDelete}) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full ">
        <thead>
          <tr className="text-blue-500 ">
            {heading.map((h) => (
              <th
                key={h}
                className="px-6 py-4 text-center text-xs border border-gray-200 uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody>
          {student.map((s) => (
            <tr key={s.id} className="border border-gray-200  text-center hover:bg-blue-50 transition">
              <td className="px-6 py-4 font-semibold">{s.name}</td>
              <td className="px-6 py-4 hover:text-blue-500 hover:underline hover:decoration-blue-500 cursor-pointer">{s.email}</td>
              <td className="px-6 py-4">{s.age}</td>
              <td className="px-6 py-4">{s.room}</td>
              <td className="px-6 py-4 italic text-gray-500">
                {s.address}
              </td>
              <td className="px-6 py-4 font-bold text-green-600">
                {s.paid} Rs
              </td>
              <td className="px-6 py-4 font-bold text-red-600">
                {s.pending} Rs
              </td>
              <td  className="flex justify-center items-center mt-3">
             
                <button className="flex items-center gap-1 bg-red-500 px-2 py-1 rounded-full text-white text-sm hover:scale-105 hover:bg-red-500 hover:shadow transition-transform duration-300" onClick={()=>onDelete()}> <FaTrash />Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
