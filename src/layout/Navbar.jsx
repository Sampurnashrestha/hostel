import { useState } from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    
    alert("Logged out");
  };

  return (
    <div className="bg-blue-500 h-14 w-full flex items-center shadow-md fixed top-0 z-50">
      
      
      <h1 className="text-3xl font-bold text-white ml-14 cursor-default">
        Everest Hostel
      </h1>

      
      <div className="ml-auto mr-14 relative">
        <div
          onClick={() => setOpen(!open)}
          className="text-white flex items-center gap-2 cursor-pointer"
        >
          <CgProfile className="text-xl" />
          <span className="text-base">Admin</span>
        </div>

       
        {open && (
          <div className="absolute   mt-2 w-25  bg-white rounded-lg shadow-md ">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-center    text-red-600 hover:bg-red-100 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
