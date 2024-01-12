import React, { useState } from "react";
import GoogleKeep from "../assets/keep_img.png";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SideBarComponent from "./SideBarComponent";
import { Drawer } from "@mui/material";


function DashboardHeader({sideBarState,setSideBarState}:{sideBarState:boolean,setSideBarState:Function}) {


  const OpenhandleSidebar = () =>{
    
    setSideBarState(true);
    
  }

  const closehandleSidebar = () =>{
    setSideBarState(false);

  }

  return (
   <>
      <section className="w-full flex justify-between items-center fixed top-0">
        <div className="w-4/6 flex justify-between items-center" >
          <div className="w-1/4 flex justify-evenly items-center">
            <h5 className="" onClick={(sideBarState ? closehandleSidebar  : OpenhandleSidebar )}>
              <DehazeOutlinedIcon />
            </h5>
            <img src={GoogleKeep} alt="img" className="h-18 w-18 mt-3" />
            <h1 className="text-2xl">Keep</h1>
          </div>
          </div>
         
      </section>
      {/* <div className="flex flex-col w-[10%] ml-6 mt-8 ">
      <LightbulbOutlinedIcon/>
      </div>
      <div className="flex flex-col w-[10%] ml-6 mt-7 ">
      <ArchiveOutlinedIcon/>
      </div>
      <div className="flex flex-col w-[10%] ml-6 mt-7 ">
      <DeleteOutlineOutlinedIcon/>
      </div> */}
    </>
  );
}

export default DashboardHeader;
