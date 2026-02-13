import React from 'react'
import { mockStudent } from '../mockData/mockData'
import { mockRoom } from '../mockData/mockRoom';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const totalStudents = mockStudent.length;
  const totalRoom = mockRoom.length;
  const totalBed = mockRoom.reduce((sum,room)=>sum+room.totalBeds,0)
  const totalAvailableBeds = mockRoom.reduce((sum,room)=>sum+room.availableBeds,0)
  const totalOccupiedBeds = mockRoom.reduce((sum,room)=>sum+room.occupiedBeds,0)
  const totalPayment = mockStudent.reduce((sum,student)=>sum+student.paid,0)
  const totalUnpaid = mockStudent.reduce((sum,student)=>sum+student.pending,0)
  return (
    <div className='max-w-full '>
      <h1 className='text-7xl font-extrabold font-tinos bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mx-80'>Everest Hostel</h1>

      <div className=' mx-auto mt-13  ml-30 text-center'>
       <DashboardCard totalStudents={totalStudents} totalAvailableBeds={totalAvailableBeds} totalBed={totalBed} totalOccupiedBeds={totalOccupiedBeds} totalPayment={totalPayment} totalRoom={totalRoom} totalUnpaid={totalUnpaid} />
      </div>

    </div>
  )
}

export default Dashboard