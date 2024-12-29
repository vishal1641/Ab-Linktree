


import React, { useState, useEffect } from "react";
import { FaFilePdf, FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const links = [
    { label: "React Js Interview Questions", file: "/react.pdf" },
    { label: "HTML and CSS Interview Questions ", file: "/htmlcss.pdf" },
    { label: "JavaScript Interview Questions", file: "/js.pdf" },
    { label: "C++ Technical Interview Questions", file: "/c++.pdf" },
    { label: "Java Interview Questions", file: "/java.pdf" },
    { label: "Data Structure Technical Questions", file: "/dsa.pdf" },
    { label: "DBMS Interview Questions", file: "/dbms.pdf" },
    { label: "OOPS Interview Questions", file: "/OOPS.pdf" },
    { label: "Computer Networks Interview Questions", file: "/CN.pdf" },
    { label: "Operating System Interview Questions", file: "/OS.pdf" },
    { label: "SQL Notes", file: "/SQLnotes.pdf" },
    { label: "SQL Practice Questions", file: "/SQL.pdf" },
    { label: "HR Interview Questions", file: "/25 HR ques.pdf" },
    { label: "TCS Pattern Printing Questions ", file: "/Pattern.pdf" },
  ];

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [animateTitle, setAnimateTitle] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: isDarkTheme
      ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
      : "linear-gradient(135deg, #f3e7e9, #e3eeff, #d4f1f4)",
    color: isDarkTheme ? "#ffffff" : "#000000",
    fontFamily: "'Poppins', sans-serif",
    padding: "2rem",
    transition: "background 0.5s ease",
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "2rem",
    textAlign: "center",
    fontWeight: "bold",
    color: isDarkTheme ? "#ffd700" : "#2575fc",
    letterSpacing: "2px",
    transform: animateTitle ? "scale(1)" : "scale(0.9)",
    opacity: animateTitle ? 1 : 0,
    transition: "transform 0.8s ease, opacity 0.8s ease",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.5rem",
    width: "100%",
    maxWidth: "1200px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: isDarkTheme ? "#ffd700" : "#2575fc",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    borderRadius: "12px",
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const cardHoverStyle = {
    transform: "scale(1.1)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    background: "rgba(255, 255, 255, 0.2)",
  };

  const switchContainerStyle = {
    position: "absolute",
    top: "6px",
    right: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: isDarkTheme ? "#222831" : "#ffffff",
    padding: "0.5rem 1rem",
    borderRadius: "50px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "background 0.3s ease",
  };

  const iconStyle = {
    fontSize: "1.5rem",
    color: isDarkTheme ? "#ffd700" : "#2575fc",
    transition: "color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={switchContainerStyle} onClick={toggleTheme}>
        {isDarkTheme ? <FaMoon style={iconStyle} /> : <FaSun style={iconStyle} />}
        <span style={{ fontSize: "0.9rem" }}>{isDarkTheme ? "Dark Mode" : "Light Mode"}</span>
      </div>
      <h1 style={titleStyle}>AlgoBoost Linktree</h1>
      <div style={gridStyle}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.file}
            download
            style={cardStyle}
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
          >
            <FaFilePdf style={{ fontSize: "1.2rem" }} /> {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
