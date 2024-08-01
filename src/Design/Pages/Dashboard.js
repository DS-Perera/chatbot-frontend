import React from "react";
import TopBar from "../Components/TopBar";

export default function Dashboard(prop) {
  return (
    <div>
      <TopBar userName={prop.userName} title="Dashboard and Analytics" />
    </div>
  );
}
