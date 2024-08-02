import React, { useState } from "react";
import TopBar from "../Components/TopBar";

export default function Leads(props) {
  const [tableData] = useState([
    {
      dateTime: "2024/07/24",
      firstName: "Darshana",
      lastName: "Perera",
      chatId: "1234567",
      contactNumber: "771461925",
      email: "abc@gmail.com",
      country: "Sri Lanka",
    },
    {
      dateTime: "2024/07/24",
      firstName: "Darshana",
      lastName: "Perera",
      chatId: "1234567",
      contactNumber: "771461925",
      email: "abc@gmail.com",
      country: "Sri Lanka",
    },
    // Add more data here to test pagination
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  // Slice the data for the current page
  const currentData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const downloadTableAsCSV = () => {
    const header = [
      "Date & Time",
      "First Name",
      "Last Name",
      "Chat Id",
      "Contact Number",
      "Email",
      "Country",
    ];

    const rows = tableData.map((row) => [
      row.dateTime,
      row.firstName,
      row.lastName,
      row.chatId,
      row.contactNumber,
      row.email,
      row.country,
    ]);

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += header.join(",") + "\n";
    csvContent += rows.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const a = document.createElement("a");
    a.href = encodedUri;
    a.download = "table-data.csv";
    a.click();
  };

  return (
    <div>
      <TopBar userName={props.userName} title="Dashboard > Contacts & Leads" />
      <div className="container card rounded-3 py-5 px-5">
        <div className="d-flex justify-content-between">
          <h2 className="page-title mb-3 primary-clr">
            People engaged with Chatbot
          </h2>
          <button
            className="btn btn2 btn-primary px-5 py-2 font-weight-bold"
            onClick={downloadTableAsCSV}
          >
            Download as CSV
          </button>
        </div>
        <div className="row px-2">
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Date & Time
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  First Name
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Last Name
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Chat Id
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Contact Number
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Email
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Country
                </th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((data, index) => (
                <tr key={index}>
                  <td>{data.dateTime}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.chatId}</td>
                  <td>{data.contactNumber}</td>
                  <td>{data.email}</td>
                  <td>{data.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-secondary"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-secondary"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
