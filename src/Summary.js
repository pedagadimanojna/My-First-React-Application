import React from "react";
import { useLocation } from "react-router-dom";
import './App.css';

export default function Summary() {
  const { state } = useLocation();

  if (!state) return <p>No data submitted.</p>;

  const fields = [
    { label: "First Name", value: state.firstName },
    { label: "Last Name", value: state.lastName },
    { label: "Username", value: state.username },
    { label: "Email", value: state.email },
    { label: "Password", value: state.password },
    { label: "Country Code", value: state.countryCode },
    { label: "Phone", value: state.phone },
    { label: "Country", value: state.country },
    { label: "City", value: state.city },
    { label: "PAN", value: state.pan },
    { label: "Aadhaar", value: state.aadhaar },
  ];

  return (
    <div className="form-summary">
      <h2>Form Summary</h2>
      <div className="summary-container">
        {fields.map((field, index) => (
          <div key={index} className="summary-row">
            <span className="summary-label">{field.label}:</span>
            <span className="summary-value">{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


