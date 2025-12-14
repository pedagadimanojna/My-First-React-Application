import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    countryCode: "",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "pan") value = value.toUpperCase();
    if (e.target.name === "aadhaar") value = value.trim();
    setForm({ ...form, [e.target.name]: value });
  };

  const errors = {
    firstName: !form.firstName,
    lastName: !form.lastName,
    username: !form.username,
    email: !/^\S+@\S+\.\S+$/.test(form.email),
    password: form.password.length < 6,
    countryCode: !form.countryCode,
    phone: !/^\d{10}$/.test(form.phone),
    country: !form.country,
    city: !form.city,
    pan: !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan),
    aadhaar: !/^\d{12}$/.test(form.aadhaar),
  };

  const isValid = !Object.values(errors).some(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/summary", { state: form });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p className="error">Required</p>}

      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p className="error">Required</p>}

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      {errors.username && <p className="error">Required</p>}

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">Invalid Email</p>}

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          style={{ flex: 1 }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="show-hide-btn"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.password && <p className="error">Min 6 characters</p>}

      <input
        name="countryCode"
        placeholder="Country Code (+91)"
        value={form.countryCode}
        onChange={handleChange}
      />
      {errors.countryCode && <p className="error">Required</p>}

      <input
        name="phone"
        placeholder="Phone (10 digits)"
        value={form.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error">Invalid Phone</p>}

      <input
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />
      {errors.country && <p className="error">Required</p>}

      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
      />
      {errors.city && <p className="error">Required</p>}

      <input
        name="pan"
        placeholder="PAN (ABCDE1234F)"
        maxLength="10"
        value={form.pan}
        onChange={handleChange}
      />
      {errors.pan && <p className="error">Invalid PAN</p>}

      <input
        name="aadhaar"
        placeholder="Aadhaar (12 digits)"
        maxLength="12"
        value={form.aadhaar}
        onChange={handleChange}
      />
      {errors.aadhaar && <p className="error">Invalid Aadhaar</p>}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
