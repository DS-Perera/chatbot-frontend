import React, { useState } from "react";
import dashboad from "../Assets/dashboard.png";
import bot from "../Assets/bot.png";
import chats from "../Assets/chats.png";
import leads from "../Assets/leads.png";
import intergration from "../Assets/intergration.png";
import customize from "../Assets/customize.png";
import agent from "../Assets/agent.png";
import acc from "../Assets/acc.png";

const NavBar = (prop) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
    prop.setActiveItem(item);
  };

  const items = [
    { src: dashboad, alt: "Home" },
    { src: bot, alt: "Chat" },
    { src: chats, alt: "Stats" },
    { src: leads, alt: "Settings" },
    { src: intergration, alt: "Info" },
    { src: customize, alt: "User" },
    { src: agent, alt: "More" },
    { src: acc, alt: "Account" },
  ];

  return (
    <div className="navBar">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`navBar-item ${activeItem === index ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <div className="img">
              <img src={item.src} alt={item.alt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
