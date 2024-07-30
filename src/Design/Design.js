import React from "react";
import NavBar from "./Components/NavBar";

export default function Design() {
  const [activeItem, setActiveItem] = React.useState("a");
  return (
    <div>
      <p>asasas</p>
      {activeItem}
      <NavBar setActiveItem={setActiveItem} />
    </div>
  );
}
