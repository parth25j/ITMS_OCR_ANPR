import React, { useEffect, useState, useContext } from "react";
import DropDown from "../components/common/filters/DropDown";
import { DetectionContext } from "../context/detetctionContext";

// import CommonTable from "../components/common/CommonTable";
import { ITMS_Events, Anomaly_Events } from "../data/test";
import Table from "../components/common/Table";

const headingDropDown = "Select Camera";
const styleDropDown = {
  hover: "",
};

const cameras = [
  "Camera 1 - Entrance",
  "Camera 2 - Parking Lot",
  "Camera 3 - Lobby",
  "Camera 4 - Back Gate",
];






const LiveFeed = () => {
  const itmsCol =   Object.keys(ITMS_Events[0])
  console.log(ITMS_Events)
  const [selectRow,setSelectedRow] = useState({} || "-")
  useEffect(()=>{
    console.log(selectRow,"this row is selected")
  },[selectRow])
  const {detectionData} = useContext(DetectionContext)
  console.log('this is detection context',detectionData)

  return (
    <div className="h-full w-full p-2 gap-2 flex ">
      {/* //live feed section */}
      <div className="w-1/2 flex flex-col gap-1">
        <div className="w-full h-1/2 p-2 bg-cardBg shadow-md border-border border-2">
          <div className="flex justify-center">
            <h2 className="text-2xl  font-bold text-gray-700">Live Feed</h2>
          </div>
          <div className=" flex  bg-red-400"></div>
        </div>

        {/* //transaction details */}

        <div className="w-full h-1/2 p-2 bg-cardBg shadow-md border-border border-2 flex gap-2">
          {/* //transaction details */}
          <div className="w-1/2 border-2 border-border flex flex-col gap-4 p-4 font-semibold ">
             <div className=" uppercase border-b-2 border-border"><span>date/time :{selectRow.timestamp}</span></div>
             <div className=" uppercase border-b-2 border-border"><span>location: {selectRow.location}</span></div>
             <div className=" uppercase border-b-2 border-border"><span>junction: {"test"}</span></div>
             <div className=" uppercase border-b-2 border-border"><span>transaction id: {"test"}</span></div>
             <div className=" uppercase border-b-2 border-border"><span>vehicle type: {selectRow.vehicleNumber}</span></div>
             <div className=" uppercase border-b-2 border-border flex justify-between"><span>make: {"test"}</span> <span>color: {"test"}</span></div>
             <div className=" uppercase border-b-2 border-border">voilation Type: {selectRow.eventType}</div>
          </div>

          {/* image */}
          <div className="w-1/2 border-2 border-border"></div>
        </div>
      </div>

      {/* //cameraSelection */}
      <div className="w-1/2 min-h-full flex flex-col bg-cardBg shadow-md border-border border-2 p-2 pb-2">
        <DropDown
          heading={headingDropDown}
          style={styleDropDown}
          dropDownItems={cameras}
          type="camera"
        />
        <div className=" overflow-scroll p-2">
        {/* <CommonTable columns={itmsCol} data={ITMS_Events} /> */}
         <Table  data={detectionData} onRowSelect={setSelectedRow}/>
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;



// transaction 

//  date/time
//  location
//  lane
//  tansactionID
//  vehicle type
//  make color 
//  voialtion type