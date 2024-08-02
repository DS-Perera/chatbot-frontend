import React, { useState, useMemo, useEffect } from "react";
import TopBar from "../Components/TopBar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { CSVLink } from "react-csv"; // Import CSVLink for CSV export

export default function Leads(props) {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // Simulate fetching data from API
    const fetchUserData = async () => {
      try {
        // Replace with actual API endpoint
        const response = await fetch("http://localhost:3002/viewUserData");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTableData(data.userData);
        console.log(tableData);
        setFilteredData(data.userData); // Initialize filtered data with all user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Filtered Data
  const filteredDataMemo = useMemo(() => {
    return tableData.filter(
      (row) =>
        row.chatId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.contactNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, tableData]);

  // Paginated Data
  const totalPages = Math.ceil(filteredDataMemo.length / itemsPerPage);
  const currentData = filteredDataMemo.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Page Change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle Search Input Change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  // CSV Headers
  const headers = [
    { label: "Date & Time", key: "timestamp" },
    { label: "First Name", key: "name" },
    { label: "Last Name", key: "lastName" },
    { label: "Chat ID", key: "chatId" },
    { label: "Contact Number", key: "number" },
    { label: "Email", key: "email" },
    { label: "Country", key: "country" },
  ];

  return (
    <div>
      <TopBar userName={props.userName} title="Dashboard > Contacts & Leads" />
      <div className="container card rounded-3 py-5 px-5">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="page-title mb-3 primary-clr">
            People engaged with Chatbot
          </h2>
          <div>
            <CSVLink
              data={filteredDataMemo}
              headers={headers}
              filename={"table-data.csv"}
              className="btn btn-primary px-5 py-2 font-weight-bold btn2"
            >
              Download as CSV
            </CSVLink>
          </div>
        </div>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="row px-2">
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Date & Time
                </th>
                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Name
                </th>

                <th style={{ backgroundColor: "#635bee", color: "#ffffff" }}>
                  Chat ID
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
                  <td>{data.timestamp}</td>
                  <td>{data.name}</td>
                  <td>{data.chatId}</td>
                  <td>{data.number}</td>
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
