import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "../../pages/Dashboard";
import LiveFeed from "../../pages/LiveFeed";
import { Routes,Route } from "react-router";
import Reports from "../../pages/Reports";
import Users from "../../pages/Users";


const Layout = () => {
  return (
    <>
      <div className="flex w-[100vw] h-[100vh]">
        <div className="md:min-w-[80px] md:max-w-[120px] lg:min-w-[80px] lg:max-w-[120px]">
          <SideNav />
        </div>
        <div className=" flex flex-col flex-1">
          {/* //header */}
          <div className="bg-white w-full border-b-2 h-14 border-border">
            <Header />
          </div>

          <div className="  h-[calc(100%-80px)]">
          {/* <Dashboard/> */}
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/live-feed" element={<LiveFeed/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/user-management" element={<Users/>}/>
        </Routes>
          </div>
          
          <div className="sticky">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
