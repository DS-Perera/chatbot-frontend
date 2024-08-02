import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login(prop) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = () => {
    if (email === "a" && password === "a") {
      console.log("Login successful");
      prop.setLogin(false);
    } else {
      console.log("Invalid credentials");
      setPassword("");
      setEmail("");
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 initial">
      <div className="text-center">
        <h2 className="">{getGreeting()}</h2>
        <h1 className="font-weight-bold">AI Chatbot</h1>
        <div className="mt-4">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary px-5 py-2 font-weight-bold"
          onClick={handleLogin}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
