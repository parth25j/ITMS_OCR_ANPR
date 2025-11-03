import React,{ createContext, useEffect, useState} from "react";

export const DetectionContext = createContext()

const DetectionProvider = ({children})=>{

    const [detectionData,setDetectionData] = useState([])
    

    async function getDetetctionData() {
        try {
          const response = await fetch('http://localhost:5137/api/detection/get-detections'); // your backend URL
          if (!response.ok) {
            throw new Error('Failed to fetch detections');
          }
      
          const data = await response.json();
          setDetectionData(data)
          console.log('Detections:', data);
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
      
   

    useEffect(()=>{
     
            getDetetctionData()

      
    },[])

    return(
      <DetectionContext.Provider value={{detectionData}}>
        {children}
      </DetectionContext.Provider>
    )
}

export default DetectionProvider