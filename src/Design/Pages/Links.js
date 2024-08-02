import React from "react";
import TopBar from "../Components/TopBar";
import WebIcon from "../Assets/WebIcon.png";
import AppIcon from "../Assets/AppIcon.png";
import WhstappIcon from "../Assets/WhstappIcon.png";
import wpIcon from "../Assets/wpIcon.png";
import Chatbot from "../Components/Chatbot";

const Intergrations = [
  { name: "Web Site ", icon: WebIcon },
  { name: "Whatsapp", icon: WhstappIcon },
  { name: "Agent App", icon: AppIcon },
  { name: "Wordpress", icon: wpIcon },
];

export default function Links(prop) {
  return (
    <div>
      <TopBar userName={prop.userName} title="Dashboard > Intergrations" />
      <Chatbot />
      <div className="container card rounded-3 py-5 px-5">
        <h2 className="page-title mb-3 primary-clr">Chatbots Intergrations</h2>
        <div className="row">
          {Intergrations.map((bot, index) => (
            <div className="col-md-2 mb-4" key={index}>
              <div className="card p-4 card-height rounded-4">
                <div className="d-flex justify-content-center">
                  <img
                    src={bot.icon}
                    alt={`${bot.name} Icon`}
                    className="mb-1 text-center"
                    style={{ width: "80px" }}
                  />
                </div>
                <h4 className="text-center primary-clr">{bot.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
