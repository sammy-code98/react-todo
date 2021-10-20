import React from "react";
import Clock from "../Clock";

import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Clock />
      <div style={container}>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </div>
    </header>
  );
}
const container = {
  marginLeft: "auto",
  paddingTop: "15px",
  paddingRight: "20px",
  fontFamily: `'Montserrat', sans-serif`,
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px",
  display: "flex",
  flexDirection: "row",
  fontFamily: `'Montserrat', sans-serif`,
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
};
export default Header;
