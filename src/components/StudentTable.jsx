import React from "react";

const StudentTable = ({ student, heading }) => {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
