import React from "react";
import NavBar from "./Components/NavBar";
import Initial from "./Pages/Initial";
import Dashboard from "./Pages/Dashboard";
import Chatbots from "./Pages/Chatbots";
import Chats from "./Pages/Chats";
import Leads from "./Pages/Leads";
import Customize from "./Pages/Customize";
import Agents from "./Pages/Agents";
import User from "./Pages/User";
import Links from "./Pages/Links";

export default function Design() {
  const [activeItem, setActiveItem] = React.useState(1);
  const [userName, setUserName] = React.useState("Darshana");
  return (
    <div>
      {/* <p>asasas</p>
      {activeItem} */}
      <NavBar setActiveItem={setActiveItem} activeItem={activeItem} />
      <div className="page">
        {activeItem === "a" && <Initial setActiveItem={setActiveItem} />}
        {activeItem === 0 && <Dashboard userName={userName} />}
        {activeItem === 1 && <Chatbots userName={userName} />}
        {activeItem === 2 && <Chats />}
        {activeItem === 3 && <Leads />}
        {activeItem === 4 && <Links />}
        {activeItem === 5 && <Customize />}
        {activeItem === 6 && <Agents />}
        {activeItem === 7 && <User />}
      </div>
    </div>
  );
}
