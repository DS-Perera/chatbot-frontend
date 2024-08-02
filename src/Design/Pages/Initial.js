import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import acc from "../Assets/dashboard Asset.png";

export default function Initial(prop) {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good Morning, Welcome to";
    } else if (currentHour < 18) {
      return "Good Afternoon, Welcome to";
    } else {
      return "Good Evening, Welcome to";
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 initial">
      <div className="text-center">
        <h2 className="">{getGreeting()}</h2>
        <h1 className=" font-weight-bold">AI Chatbot</h1>
        <div>
          <img
            src={acc}
            alt="Chatbot Icon"
            className="mb-4"
            style={{ width: "250px" }}
          />
        </div>
        <button
          className="btn btn-primary px-5 py-2 font-weight-bold"
          onClick={() => {
            prop.setActiveItem(0);
            console.log("object");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
