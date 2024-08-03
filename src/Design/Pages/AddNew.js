import React, { useState, useEffect } from "react";
import TopBar from "../Components/TopBar";

export default function AddNew(prop) {
  const [content, setContent] = useState({
    welcomeMessage: "",
    personalDetails: "",
    jobDescription: "",
    companyDetails: "",
    productsServiceDescription: "",
    contactDetails: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/userExistingData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error("Error fetching existing data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setContent((prevContent) => ({
      ...prevContent,
      [id]: value,
    }));
  };

  return (
    <div>
      <TopBar userName={prop.userName} title="Dashboard > Chatbots" />
      <div className="container card rounded-3 py-5 px-5 create-chatbot">
        <h2 className="page-title mb-3 primary-clr">
          Add Knowledge for Chatbot
        </h2>
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="welcomeMessage">Welcome Message</label>
              <textarea
                className="form-control"
                id="welcomeMessage"
                rows="3"
                value={content.welcomeMessage}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="personalDetails">Personal Details</label>
              <textarea
                className="form-control"
                id="personalDetails"
                rows="3"
                value={content.personalDetails}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="jobDescription">
                Job Description and Job Role
              </label>
              <textarea
                className="form-control"
                id="jobDescription"
                rows="3"
                value={content.jobDescription}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="companyDetails">Company Details</label>
              <textarea
                className="form-control"
                id="companyDetails"
                rows="3"
                value={content.companyDetails}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productsServiceDescription">
                Products & Service Description
              </label>
              <textarea
                className="form-control"
                id="productsServiceDescription"
                rows="3"
                value={content.productsServiceDescription}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="contactDetails">Contact Details</label>
              <textarea
                className="form-control"
                id="contactDetails"
                rows="3"
                value={content.contactDetails}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-end">
            <button
              className="btn btn2 btn-primary px-5 py-2 font-weight-bold"
              onClick={async () => {
                try {
                  const response = await fetch(
                    "http://localhost:3002/storeTextareaContent",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(content),
                    }
                  );

                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }

                  const data = await response.json();
                  console.log("Data saved:", data);
                } catch (error) {
                  console.error("Error saving data:", error);
                }
              }}
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
