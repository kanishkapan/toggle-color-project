import React, { useState } from "react";
import "../src/style.css";

const Toggle = () => {
  const [theme, setTheme] = useState("light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <section
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          height: "100vh",
          transition: "all 0.5s ease",
        }}
      >
        <button onClick={handleClick}>
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>

        <section className="content">
          <h1>
            Welcome To A <br />
            Real World
          </h1>
        </section>
      </section>
    </>
  );
};

export default Toggle;
