import React, { useState } from "react";
import { mockStudent } from "../mockData/mockData";
import PaymentTable from "../components/PaymentTable";
import Success from "../components/Success";

const heading = [
  "Student",
  "Room",
  "Amount(per month)",
  "paid",
  "pending",
  "Action",
];
const Payment = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePay = () => {
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 2000);
  };
  return (
    <div className="p-6 px-25   ">
      <h1>Payment</h1>

      {showSuccess && <Success />}
      <PaymentTable
        student={mockStudent}
        headings={heading}
        onPay={handlePay}
      />
    </div>
  );
};

export default Payment;
