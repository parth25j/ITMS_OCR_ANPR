import React, { useState, useEffect,useContext } from "react";
import { CircleUser } from 'lucide-react';
import { ChevronsUpDown } from 'lucide-react';
import { X } from 'lucide-react';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openModal,setOpenModal] = useState(false)
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()


  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [currentTime]);

  const logOut = ()=>{
      logout()
      navigate('login')
  }

  return (
    <div className="flex justify-between items-center px-2 py-2 h-full relative bg-Primary">
      <div className="p-2">
      <img
        src="/VAAULogo.jpg"
        className="h-[calc(100%-8px)] w-22 object-fill"
      ></img>
      </div>
      <div className="flex flex-2 justify-around">
        <h2 className=" font-bold text-white">Welcome Admin</h2>
        
      </div>
      <div className="flex gap-4">
      <span className="text-white">{currentTime.toLocaleString()}</span>
      <div className="flex pr-3">
        <CircleUser className="text-secondary cursor-pointer hover:text-white" onClick={()=>setOpenModal(prev=>!prev)}/>
        
      </div>
      </div>

      {
        openModal && (<div className="bg-white shadow-md border-border border-2 rounded-md p-2 absolute right-4 top-14 w-[300px] h-[400px] z-50">
           <div className="w-full flex justify-between">
            <h2 className="text-gray-600 font-semibold">Settings</h2>
            <X className="hover:text-red-600 hover:font-bold text-red-500 cursor-pointer" onClick={()=>setOpenModal(prev=>!prev)}/>
           </div>
           <div className="border-border border-2 h-[340px] mt-2 p-2">
               <button className="font-semibold cursor-pointer bg-red-200 px-4 py-2 rounded-2xl text-red-500 hover:text-red-600 hover:text-red-600 " onClick={logOut}><span>Lout out</span></button>
           </div>
        </div>)
      }
    </div>
  );
};

export default Header;
