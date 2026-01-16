import React from "react";
import SideBar from "../../components/userDashborad/userSideBar";

const UserDashboard = () => {
  return (
    <>
      <div className="flex h-[90vh] w-full">
        <div className="bg-(--color-background) border-green-500 w-2/10"><SideBar/></div>
        <div className="border border-amber-800 w-8/10">Content</div>
      </div>
    </>
  );
};

export default UserDashboard;
