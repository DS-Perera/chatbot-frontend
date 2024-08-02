import React from "react";
import TopBar from "../Components/TopBar";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function Dashboard(prop) {
  const lineData = {
    labels: [
      "1 Mar",
      "7 Mar",
      "7 Mar",
      "15 Mar",
      "15 Mar",
      "22 Mar",
      "22 Mar",
      "30 Mar",
      "30 Mar",
    ],
    datasets: [
      {
        label: "Credit Card",
        data: [0, 500, 1000, 1500, 1200, 1700, 1100, 1600, 1800],
        borderColor: "#8fbc8f",
        fill: false,
      },
      {
        label: "PayPal",
        data: [0, 700, 1100, 1400, 900, 1300, 900, 1500, 1700],
        borderColor: "#6495ed",
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard primary-clr">
      <TopBar userName={prop.userName} title="Dashboard and Analytics" />
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-md-6 px-4">
            <div className="card p-4 rounded-4">
              <h2 className="primary-clr">Common Analytics</h2>
              <div className="row">
                <div className="col-md-3 ">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4 primary-clr">
                    <h3 className="primary-clr">01</h3>
                    <p className="primary-clr">Chatbots</p>
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4">
                    <h3 className="primary-clr">14</h3>
                    <p className="primary-clr">Contacts</p>
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4">
                    <h3 className="primary-clr">04</h3>
                    <p className="primary-clr">Manual Chat</p>
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4">
                    <h3 className="primary-clr">04</h3>
                    <p className="primary-clr">Manual Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-4">
            <div className="card p-4 rounded-4">
              <h2 className="primary-clr">Weekly Updates</h2>
              <div className=" p-3">
                {/* <h3 >Contributions</h3> */}
                {/* Add your heatmap component or image here */}
              </div>
            </div>
          </div>
          <div className="col-md-6 px-4 mt-5">
            <div className="card p-4 rounded-4">
              <h3 className="primary-clr">Payments Received</h3>
              <Line data={lineData} />
            </div>
          </div>
          <div className="col-md-6 px-4 mt-5">
            <div className="card p-4 rounded-4">
              <h3 className="primary-clr">Chatbots</h3>
              <div className="row">
                <div className="col-md-3 ">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4 primary-clr">
                    <h3 className="primary-clr">01</h3>
                    <p className="primary-clr">Chatbots</p>
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4">
                    <h3 className="primary-clr">14</h3>
                    <p className="primary-clr">Contacts</p>
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4">
                    <h3 className="primary-clr">04</h3>
                    <p className="primary-clr">Manual Chat</p>
                  </div>
                </div>
                <div className="col-md-3 px-1">
                  <div className="card text-center py-3 flex-fill m-2 rounded-4">
                    <h3 className="primary-clr">04</h3>
                    <p className="primary-clr">Manual Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
