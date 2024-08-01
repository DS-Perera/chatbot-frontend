import React from "react";
import TopBar from "../Components/TopBar";
import AppIcon from "../Assets/AppIcon.png";

export default function Chatbots(prop) {
  return (
    <div>
      <TopBar userName={prop.userName} title="Dashboard > Chatsbots" />
      <div className="container">
        <div className="card p-4">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2">
                  <div className="card p-3">
                    <div>
                      <img
                        src={AppIcon}
                        alt="Application Icon"
                        className="mb-4"
                        style={{ width: "100px" }}
                      />
                    </div>
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
