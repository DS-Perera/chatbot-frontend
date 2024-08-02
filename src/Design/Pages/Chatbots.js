import React from "react";
import TopBar from "../Components/TopBar";
import AppIcon from "../Assets/AppIcon.png";
// import AnotherIcon from "../Assets/AnotherIcon.png";

const chatbots = [
  { name: "Bot 1", icon: AppIcon },
  { name: "Bot 2", icon: AppIcon },
];

export default function Chatbots(prop) {
  return (
    <div>
      <TopBar userName={prop.userName} title="Dashboard > Chatbots" />
      <div className="container card rounded-3 py-5 px-5">
        <h2 className="page-title mb-3 primary-clr">Available Chatbots</h2>
        <div className="row">
          <div className="col-md-2 mb-4">
            <div className="card p-4 card-height rounded-4">
              <div className="d-flex justify-content-center">
                <img
                  src={AppIcon}
                  alt="Add bot icon"
                  className="mb-1 text-center"
                  style={{ width: "80px" }}
                />
              </div>
              <h4 className="text-center primary-clr">Add new</h4>
            </div>
          </div>
          {chatbots.map((bot, index) => (
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
