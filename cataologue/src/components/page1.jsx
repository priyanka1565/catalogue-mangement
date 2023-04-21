import { within } from "@testing-library/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { name, email } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="flex"
        style={{
          height: "400px",
          display: "flex",
          flexDirection: "column",
          width: "400px",
          marginTop: "100px",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "40%",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
            fontWeight: "700",
          }}
        >
          Log In
        </h1>
        <label>
          Name:
          <input
            style={{
              height: "50px",
              width: "100%",
              border: "2px solid gray",
            }}
            type="text"
            value={name}
            placeholder="Enter Email"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            style={{
              height: "50px",
              width: "100%",
              border: "2px solid gray",
            }}
            type="email"
            value={email}
            placeholder="Enter Name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button
          style={{
            marginLeft: "50%",
            marginRight: "180px",
            marginTop:"40px",
            height: "40px",
            width: "120px",
            textAlign: "center",
            backgroundColor: "teal",
             boxShadow: "5px 10px"
          }}
          className="rounded-3xl text-white text-xl w-40"
          type="submit"
        >
          Register
        </button>
      </div>

      <br />
    </form>
  );
};
