import React from 'react';
import { NavLink } from 'react-router-dom';


import { MdDashboard, MdAttachMoney } from "react-icons/md"; 

function Sidebar() {
  const activeLink = "bg-blue-600 text-white shadow-lg transform scale-105";
  const normalLink = "text-gray-300 hover:bg-gray-800 hover:text-white transition-all";

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-5 flex flex-col text-white hidden md:flex"> 
      <h1 className="text-2xl font-bold text-center mb-10 border-b border-gray-700 pb-4 flex items-center justify-center gap-2">
        <MdAttachMoney className="text-yellow-400 text-3xl" /> 
        <span>حسابداری من</span>
      </h1>

      <nav className="flex-1 space-y-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            ` px-4 py-3 rounded-lg flex items-center gap-3 ${isActive ? activeLink : normalLink}`
          }
        >
          <MdDashboard className="text-xl" /> 
          <span className="font-medium">داشبورد</span>
        </NavLink>

        <NavLink 
          to="/transactions" 
          className={({ isActive }) => 
            ` px-4 py-3 rounded-lg flex items-center gap-3 ${isActive ? activeLink : normalLink}`
          }
        >
          <MdAttachMoney className="text-xl" />
          <span className="font-medium">تراکنش‌ها</span>
        </NavLink>
      </nav>


    </div>
  );
}

export default Sidebar;