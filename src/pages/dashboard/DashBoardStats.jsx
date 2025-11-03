// import React,{useState}from 'react'
// import Tabs from '../../components/common/filters/Tabs'
// import Card from '../../components/common/Card';

// const DashBoardStats = () => {
//     const [selectedTab, setSelectedTab] = useState("Violation Summary");
//     const [selectedLocation, setSelectedLocation] = useState("All cameras");
//     const [dateFrom, setDateFrom] = useState("2025-10-11T00:00");
//     const [dateTo, setDateTo] = useState("2025-10-11T23:59");
//     const [selectedDuration, setSelectedDuration] = useState("1 day");

//     const tabsData = [
//         "Violation Summary",
//         "Violation Distribution",
//         "Violation Stat",
//         "Transaction Stat",
//         "Challan Stat",
//         "Speed Stat",
//         "Vehicle Stat",
//       ];

//       const durations = ["1 day", "1 week", "1 month", "3 months", "1 year"];
//       const locations = ["All cameras", "Camera 1", "Camera 2", "Camera 3"];
//   return (
//    <div className=" p-2">
//      <div className="h-2/3 bg-cardBg text-black p-6 shadow-md">
//       <h1 className="text-2xl font-semibold mb-4">Statistics All</h1>

//       {/* Tabs */}
//       <div className="flex flex-wrap gap-2 bg-cardBg  p-4 rounded-2xl border-2 border-border shadow-md">
//         <Tabs data={tabsData} selected={selectedTab} setSelected={setSelectedTab} />
//       </div>

//       {/* Filters */}
//       <div className="mt-6 flex flex-wrap gap-3 items-center bg-cardBg  p-4 rounded-2xl border-2 border-border shadow-md">
//         {/* Select Location */}
//         <div className="flex flex-col">
//           <label className="text-sm text-gray-700 mb-1">Select Location</label>
//           <select
//             className="bg-cardBg border-2 border-border rounded-xl px-3 py-2 text-sm focus:outline-none"
//             value={selectedLocation}
//             onChange={(e) => setSelectedLocation(e.target.value)}
//           >
//             {locations.map((loc) => (
//               <option key={loc}>{loc}</option>
//             ))}
//           </select>
//         </div>

//         {/* Duration */}
//         <div className="flex gap-2 flex-wrap">
//           {durations.map((d) => (
//             <button
//               key={d}
//               onClick={() => setSelectedDuration(d)}
//               className={`px-3 py-2 rounded-xl text-sm ${
//                 selectedDuration === d
//                   ? "bg-Primary text-white"
//                   : "bg-cardBg hover:bg-secondary text-gray-700 border-2 border-border"
//               }`}
//             >
//               {d}
//             </button>
//           ))}
//         </div>

//         {/* Date Filters */}
//         <div className="flex items-center gap-2">
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Date & Time From</label>
//             <input
//               type="datetime-local"
//               value={dateFrom}
//               onChange={(e) => setDateFrom(e.target.value)}
//               className="bg-cardBg border-2 border-border rounded-xl px-3 py-2 text-sm focus:outline-none"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-sm text-gray-700 mb-1">Date & Time To</label>
//             <input
//               type="datetime-local"
//               value={dateTo}
//               onChange={(e) => setDateTo(e.target.value)}
//               className="bg-cardBg border-2 border-border rounded-xl px-3 py-2 text-sm focus:outline-none"
//             />
//           </div>
//           <button className="bg-Primary text-white px-4 py-2 rounded-xl hover:bg-secondary hover:text-gray-700 mt-5">
//             OK
//           </button>
//         </div>
//       </div>

//       {/* Content section */}
//       <div className="mt-6 bg-bgCard border-2 border-border rounded-2xl p-6 min-h-[300px]">
//         <h2 className="text-lg font-semibold mb-3">{selectedTab}</h2>
//         <div className="text-gray-700 font-bold">
//           Showing <span className="text-gray-700">{selectedDuration}</span> data for{" "}
//           <span className="text-gray-700">{selectedLocation}</span> from{" "}
//           <span className="text-gray-700">{dateFrom}</span> to{" "}
//           <span className="text-gray-700">{dateTo}</span>.
//         </div>
//         <div className="mt-6 text-center text-gray-500 italic">
//           [Chart / Record Display Area]
//           <div className=""></div>
//           <div className="">
//             {/* //here it will get shown  */}
//           </div>
//         </div>
//       </div>
//     </div>
//    </div>

//   )
// }

// export default DashBoardStats

import React, { useState } from "react";
import Tabs from "../../components/common/filters/Tabs";
import Card from "../../components/common/Card";

const DashBoardStats = () => {
  const [selectedTab, setSelectedTab] = useState("Violation Summary");
  const [selectedLocation, setSelectedLocation] = useState("All cameras");
  const [dateFrom, setDateFrom] = useState("2025-10-11T00:00");
  const [dateTo, setDateTo] = useState("2025-10-11T23:59");
  const [selectedDuration, setSelectedDuration] = useState("1 day");

  const tabsData = [
    "Violation Summary",
    "Violation Distribution",
    "Violation Stat",
    "Transaction Stat",
    "Challan Stat",
    "Speed Stat",
    "Vehicle Stat",
  ];

  const durations = ["1 day", "1 week", "1 month", "3 months", "1 year"];
  const locations = ["All cameras", "Camera 1", "Camera 2", "Camera 3"];

  // ---------- 📊 Dummy Data for Each Tab ----------
  const violationSummaryData = [
    { name: "00:00", value: 10 },
    { name: "04:00", value: 25 },
    { name: "08:00", value: 60 },
    { name: "12:00", value: 40 },
    { name: "16:00", value: 55 },
    { name: "20:00", value: 30 },
  ];

  const violationDistributionData = [
    { name: "2-Wheeler", pv: 400, uv: 240 },
    { name: "4-Wheeler", pv: 300, uv: 139 },
    { name: "Heavy", pv: 200, uv: 380 },
    { name: "Others", pv: 100, uv: 200 },
  ];

  const transactionStatData = [
    { name: "Mon", value: 5000 },
    { name: "Tue", value: 7200 },
    { name: "Wed", value: 4800 },
    { name: "Thu", value: 6500 },
    { name: "Fri", value: 8100 },
  ];

  const challanStatData = [
    { name: "Issued", pv: 300 },
    { name: "Paid", pv: 200 },
    { name: "Pending", pv: 100 },
  ];

  const speedStatData = [
    { name: "Camera 1", value: 45 },
    { name: "Camera 2", value: 62 },
    { name: "Camera 3", value: 54 },
    { name: "Camera 4", value: 70 },
  ];

  const vehicleStatData = [
    { name: "Morning", pv: 150 },
    { name: "Noon", pv: 220 },
    { name: "Evening", pv: 180 },
    { name: "Night", pv: 100 },
  ];

  // ---------- 🧠 Function to Render the Right Chart ----------
  const renderSelectedChart = () => {
    switch (selectedTab) {
      case "Violation Summary":
        return (
          <Card
            type="chart"
            title="Violations Over Time"
            chartType="line"
            data={violationSummaryData}
          />
        );
      case "Violation Distribution":
        return (
          <Card
            type="chart"
            title="Violations by Vehicle Type"
            chartType="bar"
            data={violationDistributionData}
          />
        );
      case "Transaction Stat":
        return (
          <Card
            type="chart"
            title="Total Fine Collection (₹)"
            chartType="line"
            data={transactionStatData}
          />
        );
      case "Challan Stat":
        return (
          <Card
            type="chart"
            title="Challan Status Summary"
            chartType="bar"
            data={challanStatData}
          />
        );
      case "Speed Stat":
        return (
          <Card
            type="chart"
            title="Average Speed per Camera (km/h)"
            chartType="line"
            data={speedStatData}
          />
        );
      case "Vehicle Stat":
        return (
          <Card
            type="chart"
            title="Vehicle Flow (Time of Day)"
            chartType="bar"
            data={vehicleStatData}
          />
        );
      case "Violation Stat":
        return (
          <Card
            type="chart"
            title="Violation Statistics"
            chartType="bar"
            data={[
              { name: "Signal Jump", pv: 120 },
              { name: "Over Speed", pv: 90 },
              { name: "No Helmet", pv: 150 },
              { name: "Wrong Lane", pv: 70 },
            ]}
          />
        );
      default:
        return <div className="text-gray-500 italic">No chart available.</div>;
    }
  };

  return (
    <div className="p-2">
      <div className="h-2/3 bg-cardBg text-black p-6 shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Statistics All</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 bg-cardBg p-4 rounded-2xl border-2 border-border shadow-md">
          <Tabs
            data={tabsData}
            selected={selectedTab}
            setSelected={setSelectedTab}
          />
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-3 items-center bg-cardBg p-4 rounded-2xl border-2 border-border shadow-md">
          {/* Select Location */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-700 mb-1">
              Select Location
            </label>
            <select
              className="bg-cardBg border-2 border-border rounded-xl px-3 py-2 text-sm focus:outline-none"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map((loc) => (
                <option key={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div className="flex gap-2 flex-wrap">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDuration(d)}
                className={`px-3 py-2 rounded-xl text-sm ${
                  selectedDuration === d
                    ? "bg-Primary text-white"
                    : "bg-cardBg hover:bg-secondary text-gray-700 border-2 border-border"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Date Filters */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">
                Date & Time From
              </label>
              <input
                type="datetime-local"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="bg-cardBg border-2 border-border rounded-xl px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">
                Date & Time To
              </label>
              <input
                type="datetime-local"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="bg-cardBg border-2 border-border rounded-xl px-3 py-2 text-sm focus:outline-none"
              />
            </div>
            <button className="bg-Primary text-white px-4 py-2 rounded-xl hover:bg-secondary hover:text-gray-700 mt-5">
              OK
            </button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mt-6 bg-bgCard border-2 border-border rounded-2xl p-6 min-h-[300px]">
          <h2 className="text-lg font-semibold mb-3">{selectedTab}</h2>
          <div className="text-gray-700 font-bold">
            Showing <span className="text-gray-700">{selectedDuration}</span>{" "}
            data for <span className="text-gray-700">{selectedLocation}</span>{" "}
            from <span className="text-gray-700">{dateFrom}</span> to{" "}
            <span className="text-gray-700">{dateTo}</span>.
          </div>

          <div className="mt-6">{renderSelectedChart()}</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardStats;
