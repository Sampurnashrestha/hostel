import React from "react";
import { X } from "lucide-react";

const AddStudentModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-bold">Add Student</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              placeholder="First Name"
              className="border p-2 rounded-lg w-full"
            />
            <input
              placeholder="Last Name"
              className="border p-2 rounded-lg w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Age"
              className="border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Room No"
              className="border p-2 rounded-lg"
            />
          </div>

          <textarea
            placeholder="Address"
            className="border p-2 rounded-lg w-full"
          />

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
