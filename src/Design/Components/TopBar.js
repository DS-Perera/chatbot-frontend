import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import acc from "../Assets/dashboard Asset.png";

export default function TopBar(prop) {
  // Function to determine the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div className="container py-2">
      <div className="d-flex">
        <div className="mr-5">
          <img
            src={acc}
            alt="Chatbot Icon"
            className="mb-4 mr-5"
            style={{ width: "70px" }}
          />
        </div>
        <div className="pl-4 primary-clr">
          <p className="mt-2 pl-4">
            {getGreeting()} {prop.userName}
          </p>
          <h3>{prop.title}</h3>
        </div>
      </div>
    </div>
  );
}
