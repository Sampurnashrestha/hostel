import React from "react";

const PaymentTable = ({ headings, student, onPay }) => {
  
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="max-h-130 overflow-y-auto">
        <table className="w-full">
        <thead>
          <tr className="text-blue-500 uppercase ">
            {headings.map((h) => (
              <th key={h} className="bg-white border border-gray-200  text-center  px-6 py-4 text-xs">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
            {student.map((s)=>(
                <tr
                key={s.id}
                className="border border-gray-200 text-center  hover:bg-blue-50 transition cursor-pointer"
                >
                    <td className="font-semibold px-6 py-4">{s.name}</td>
                    <td className="text-gray-400 px-6 py-4">{s.room}</td>
                    <td className="text-blue-600 font-bold">10000</td>
                    <td className="text-green-400 font-semibold">{s.paid}</td>
                    <td className="text-red-400 font-semibold">{s.pending}</td>
                    <td>
                        {s.pending > 0 ? (
                            <button 
                            onClick={()=>onPay(s.id)}
                            className="bg-green-400 text-white  px-5 py-1 rounded-full hover:scale-105 hover:bg-green-500  transition-transform duration-300">Pay</button>
                        ): (
                            <p className="text-green-500 font-semibold cursor-not-allowed">Paid </p>
                        )}
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PaymentTable;
