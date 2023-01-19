import React from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";

import Sidebar from "../../sideBar/Sidebar";
import "./home.css";
 function Home() {
  return (
    <>
      <Header />
      <div className="home">
         <Posts />
         <Sidebar />
         
      </div>
    </>
  );
}

export default Home