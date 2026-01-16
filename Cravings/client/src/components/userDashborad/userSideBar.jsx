import React from "react";
import { ImProfile } from "react-icons/im";
import { MdProductionQuantityLimits } from "react-icons/md";

const userSideBar = () => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold"> 
            User Dashboard
        </div>
        <hr />
        <div className="grid gap-3 p-6">
            <span>Overview</span>
            <span>Profile</span>
            <span>Orders</span>
            <span>Help desk</span>
        </div>
        
      </div>
    </>
  );
};

export default userSideBar;
