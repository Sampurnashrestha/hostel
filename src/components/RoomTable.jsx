
import { FaTimes } from "react-icons/fa";

const getStatusColor = (status) => {
  switch (status) {
    case "Full":
      return "text-red-500";
    case "Almost Full":
      return "text-yellow-500";
    case "Available":
      return "text-green-500";
    case "Empty":
      return "text-black";
    default:
      return "text-blue-500";
  }
};

const RoomTable = ({ room, headings, student = [], selectedRoom, setSelectedRoom }) => {

  const roomStudents = student.filter(
    (s) => String(s.room) === String(selectedRoom)
  );


  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <div className="max-h-110 overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="text-blue-500">
              {headings.map((h) => (
                <th
                  key={h}
                  className="sticky top-0 z-10 bg-white px-6 py-4 text-center text-xs border border-gray-200 uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {room.map((r) => (
              <tr
                key={r.id}
                className="border border-gray-200 text-center hover:bg-blue-50 transition cursor-pointer"
              >
                <td
                  className="px-6 py-4 font-semibold"
                  onClick={() => setSelectedRoom(r.room)}
                >
                  {r.room}
                </td>
                <td className="px-6 py-4">{r.totalBeds}</td>
                <td className="px-6 py-4 text-green-400">{r.availableBeds}</td>
                <td className="px-6 py-4 text-blue-400">{r.occupiedBeds}</td>
                <td className={`px-6 py-4 ${getStatusColor(r.status)}`}>
                  {r.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      
        {selectedRoom && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-[400px] p-6 relative">
              <FaTimes
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                size={20}
              />

              <h2 className="text-xl font-bold mb-4">
                Room {selectedRoom} Students
              </h2>

              {roomStudents.length > 0 ? (
                <ul className="space-y-2 max-h-60 overflow-y-auto">
                  {roomStudents.map((s) => (
                    <li key={s.id} className="p-2 bg-gray-100 rounded">
                      {s.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No students found</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomTable;
