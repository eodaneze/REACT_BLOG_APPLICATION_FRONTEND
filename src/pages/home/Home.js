import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sideBar/Sidebar";
import Posts from "../../posts/Posts";
import "./home.css";
export default function Home() {
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
