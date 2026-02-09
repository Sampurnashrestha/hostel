import React from "react";
import RoomTable from "../components/RoomTable";
import { useState } from "react";
import { mockStudent } from "../mockData/mockData";

const head = ["Room", "No of Beds", "Available Bed", "Occupied bed", "Status"];

const mockRoom = [
  {
    id: 1,
    room: "101",
    totalBeds: 4,
    availableBeds: 1,
    occupiedBeds: 3,
    status: "Almost Full",
  },
  {
    id: 2,
    room: "102",
    totalBeds: 3,
    availableBeds: 0,
    occupiedBeds: 3,
    status: "Full",
  },
  {
    id: 3,
    room: "103",
    totalBeds: 5,
    availableBeds: 2,
    occupiedBeds: 3,
    status: "Available",
  },
  {
    id: 4,
    room: "104",
    totalBeds: 2,
    availableBeds: 2,
    occupiedBeds: 0,
    status: "Empty",
  },
  {
    id: 5,
    room: "105",
    totalBeds: 4,
    availableBeds: 0,
    occupiedBeds: 4,
    status: "Full",
  },
  {
    id: 6,
    room: "106",
    totalBeds: 6,
    availableBeds: 3,
    occupiedBeds: 3,
    status: "Available",
  },
  {
    id: 7,
    room: "107",
    totalBeds: 3,
    availableBeds: 1,
    occupiedBeds: 2,
    status: "Almost Full",
  },
  {
    id: 8,
    room: "108",
    totalBeds: 5,
    availableBeds: 5,
    occupiedBeds: 0,
    status: "Empty",
  },
  {
    id: 9,
    room: "109",
    totalBeds: 4,
    availableBeds: 2,
    occupiedBeds: 2,
    status: "Available",
  },
  {
    id: 10,
    room: "110",
    totalBeds: 2,
    availableBeds: 0,
    occupiedBeds: 2,
    status: "Full",
  },
];

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
