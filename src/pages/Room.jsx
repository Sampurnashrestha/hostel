import React from "react";
import RoomTable from "../components/RoomTable";
import { useState } from "react";
import { mockStudent } from "../mockData/mockData";
import { mockRoom } from "../mockData/mockRoom";

const head = ["Room", "No of Beds", "Available Bed", "Occupied bed", "Status"];



const Room = () => {
   const [selectedRoom, setSelectedRoom] = useState(null);
  console.log(mockStudent);
  return (
    <div className="p-6 px-25">
      <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Rooms
      </h1>
      <RoomTable selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} room={mockRoom} headings={head} student={mockStudent} />
    </div>
  );
};

export default Room;
