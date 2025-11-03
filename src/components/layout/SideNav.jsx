import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  RadioTower,
  FileChartLine,
  User,
} from "lucide-react";
import { ArrowRightToLine } from 'lucide-react';


const navItems = [
  { id: 1, item: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
  { id: 2, item: "Live Feed", path: "/live-feed", icon: <RadioTower size={20} /> },
  { id: 3, item: "Reports", path: "/reports", icon: <FileChartLine size={20} /> },
  { id: 4, item: "Users", path: "/user-management", icon: <User size={20} /> },
];

const SideNav = () => {
    const [isActive,setIsActive] = useState()
  return (
    <div className="flex flex-col items-center justify-between h-full     py-4">
       <h1 className="text-Primary text-h1 font-bold">MENU</h1>
     
      <div className="h-[1px] bg-gray-200 w-10 mt-2" />

      {/* Nav Items */}
      <nav className="flex flex-1 flex-col items-center gap-6 mt-6">
        {navItems.map(({ id, item, path, icon }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center text-[13px] font-medium transition-all ${
                isActive
                  ? "text-Primary"
                  : "text-gray-600 hover:text-gray-600"
              }`
            }
          >
            <div
              className={`p-2 rounded-lg transition-all ${
                isActive ? "bg-secondary" : "hover:bg-secondary"
              }`}
            >
              {icon}
            </div>
            <span className="mt-1 hidden md:block">{item}</span>
          </NavLink>
        ))}
      </nav>

     
    </div>
  );
};

export default SideNav;
