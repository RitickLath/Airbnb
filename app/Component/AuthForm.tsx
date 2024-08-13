"use client";
import React, { useState } from "react";

// Style constants
const containerStyle =
  "max-w-md mx-auto mt-10 p-6 border rounded-md shadow-lg bg-white";
const titleStyle = "text-2xl font-bold mb-4";
const labelStyle = "block text-sm font-medium text-gray-700";
const inputStyle =
  "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none";
const buttonStyle =
  "w-full bg-[#EF245E] text-white py-2 rounded-md hover:bg-[#EF245E]";
const switchModeStyle = "mt-4 text-center text-[#EF245E] hover:underline";

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState(true);

  const onSwitchMode = () => {
    setMode(!mode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode) {
      // Handle sign-in logic
      console.log("Sign In", { email, password });
    } else {
      // Handle sign-up logic
      console.log("Sign Up", { email, username, password });
    }
  };

  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>{mode ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
        {mode && (
          <div>
            <label htmlFor="username" className={labelStyle}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="password" className={labelStyle}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputStyle}
            required
          />
        </div>
        <button type="submit" className={buttonStyle}>
          {mode ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className={switchModeStyle}>
        <button onClick={onSwitchMode} className={switchModeStyle}>
          {!mode ? "New to Airbnb? Sign Up" : "Already registered? Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
