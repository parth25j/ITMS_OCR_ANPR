import React,{useState,createContext, Children} from "react";
import { ITMS_Events } from "../data/test";

export const ITMSDATACONTEXT = createContext();

export const ITMSDTAPROVIDER = ({children}) => {
const [data,setData] = useState(ITMS_Events || [])
const col = Object.keys(data[0])
console.log( Array.isArray(col),"this is itms data")

    return(
       <ITMSDATACONTEXT.Provider value={{data,col}}>
        {children}
       </ITMSDATACONTEXT.Provider>
    )
}