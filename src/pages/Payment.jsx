import React, { useState } from 'react'
import { mockStudent } from '../mockData/mockData'
import PaymentTable from '../components/PaymentTable'
import Success from '../components/Success'

const heading = ["Student", "Room", "Amount(per month)", "paid", "pending", "Action"]
const Payment = () => {
  const [student, setStudent ] = useState(mockStudent)
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePay =(id)=>{
    setStudent(prev =>
      prev.map(s=>
        s.id === id ? {...s, paid: s.pending , pending:0} : s
      )
    )

    setShowSuccess(true)

    setTimeout(()=>setShowSuccess(false),2000)
  }
  return (
    <div className='p-6 px-25   '>
       <h1>Payment</h1>

      {showSuccess && <Success />}
      <PaymentTable student={student}  headings={heading} onPay={handlePay} />
    </div>
  )
}

export default Payment