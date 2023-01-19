import React from "react";
import Sidebar from "../../sideBar/Sidebar";
import Singlepost from "../../singlePost/Singlepost";
import "./single.css";
const Single = () => {
  return (
    <div className="single">
      <Singlepost />
      <Sidebar />
    </div>
  );
};
export default Single;
