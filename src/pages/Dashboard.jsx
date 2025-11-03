import React, { useState,useEffect } from "react";
import {
  ShieldAlert,
  Car,
  ClipboardPlus,
  UserPen,
  FolderSync,
  TriangleAlert,
  Users,
} from "lucide-react";
import Card from "../components/common/Card";
import Tabs from "../components/common/filters/Tabs"
import DropDown from "../components/common/filters/DropDown"
import DateRangeFilter from "../components/common/filters/DateRangeFilter"
import DashBoardStats from "./dashboard/DashBoardStats";


const dataLineChart = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 20 },
  { name: "Apr", value: 27 },
  { name: "May", value: 18 },
  { name: "Jun", value: 23 },
  { name: "Jul", value: 34 },
];

const barChartData = [
  { name: "Jan", uv: 4000, pv: 2400 },
  { name: "Feb", uv: 3000, pv: 1398 },
  { name: "Mar", uv: 2000, pv: 9800 },
  { name: "Apr", uv: 2780, pv: 3908 },
  { name: "May", uv: 1890, pv: 4800 },
  { name: "Jun", uv: 2390, pv: 3800 },
  { name: "Jul", uv: 3490, pv: 4300 },
];

const dashboardCountData = [
  { id: 0, title: "Vehicle Count", icon: <Car />, value: 120 },
  { id: 1, title: "Violation Count", icon: <ShieldAlert />, value: 54 },
  { id: 2, title: "Processed Challans", icon: <ClipboardPlus />, value: 38 },
  { id: 3, title: "Your Challans", icon: <UserPen />, value: 12 },
  { id: 4, title: "Transferred Challans", icon: <FolderSync />, value: 8 },
  { id: 5, title: "Total Alerts", icon: <TriangleAlert />, value: 64 },
  { id: 6, title: "Total Users", icon: <Users />, value: 23 },
];

const options = ["Week", "Month", "3 Months", "Year"];
const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

const Dashboard = () => {
  const [selected, setSelected] = useState("Week");
  const [location, setLocation] = useState("");
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartChange = (e) => setStartDate(e.target.value);
  const handleEndChange = (e) => setEndDate(e.target.value);

  const handleApply = () => {
    alert(`Filtering from ${startDate} to ${endDate}`);
   
  };
 useEffect(()=>{
    console.log("tab has been changed use state",startDate)
 },[handleChange])

  return (
    // <div className="h-full w-full flex flex-col  items-center">
    //   <div className=" h-[70px] container flex items-center justify-evenly ">
    //     {/* //tabselector */}
    //     <div className=" border-2 bg-cardBg border-border md:w-[350px] flex gap-1 md:h-[40px] rounded-2xl justify-evenly">
    //       <Tabs data = {options} setSelected ={setSelected} selected={selected}/>
    //     </div>
    //       {/* //dropdown */}
    //     <div className="bg-cardBg">
        
    //       <DropDown heading="Select Location" dropDownItems = {locations} />
    //     </div>

    //     {/* //datefilter */}
    //    <DateRangeFilter handleChange={handleChange} startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange}/>


    //   </div>

    //   <div className="flex h-full p-4 gap-4  w-full">
    //     {/* Left - Metric Cards */}
    //     <div className="flex flex-col flex-wrap w-1/3 gap-4 items-center">
    //       {dashboardCountData.map((item) => (
    //         <Card
    //           key={item.id}
    //           type="card"
    //           title={item.title}
    //           icon={item.icon}
    //           value={item.value}
    //         />
    //       ))}
    //     </div>

    //     {/* Right - Charts */}
    //     <div className="flex gap-4 ">
    //       <div className="w-[600px] h-1/3 bg-cardBg rounded-2xl shadow-md p-4 border-2 border-[#e0e0e0]">
    //         <Card
    //           type="chart"
    //           chartType="line"
    //           title="Monthly Data Trend"
    //           data={dataLineChart}
    //         />
    //       </div>

    //       <div className="w-[600px] h-1/3 bg-cardBg rounded-2xl shadow-md p-4 border-2 border-[#e0e0e0]">
    //         <Card
    //           type="chart"
    //           chartType="bar"
    //           title="Bar Chart"
    //           data={barChartData}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  
 
     <DashBoardStats/> 
  );
};

export default Dashboard;
