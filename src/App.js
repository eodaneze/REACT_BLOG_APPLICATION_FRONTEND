import "./App.css";
import { TopBar } from "./components";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import Home from "./components/pages/home/Home";

function App() {
  return (
   <BrowserRouter>
      <TopBar />
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
