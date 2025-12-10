import React from 'react';
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-8">
      <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
        <FaHome />
        خوش آمدید

      </h2>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">کاربر مهمان</span>
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
          U
        </div>
      </div>
    </header>
  );
}

export default Header;