import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const h1 = {
  textAlign: "center",
  fontFamily: "Montserrat",
};
const p = {
  textAlign: "justify",
  margin: "20px",
  padding: "12px",
};
const icon = {
  display: "flex",
  margin: "20px",
  justifyContent: "center",
};
function About() {
  return (
    <React.Fragment>
      <h1 style={h1}>About</h1>
      <p style={p}>
        Provide a mechanism to allow users to skip past navigation sections in
        your application as this assists and speeds up keyboard navigation.
        Skiplinks or Skip Navigation Links are hidden navigation links that only
        become visible when keyboard users interact with the page. They are very
        easy to implement with internal page anchors and some styling
      </p>
      <p style={p}>
        Provide a mechanism to allow users to skip past navigation sections in
        your application as this assists and speeds up keyboard navigation.
        Skiplinks or Skip Navigation Links are hidden navigation links that only
        become visible when keyboard users interact with the page. They are very
        easy to implement with internal page anchors and some styling
      </p>
      <div>
        <h3 style={h1}>Follow us on social media</h3>
        <div style={icon}>
          <FontAwesomeIcon icon={faCoffee} style={{ margin: "20px" }}  size="2x"/>
          <FontAwesomeIcon icon={faCoffee} style={{ margin: "20px" }} size="2x" />
          <FontAwesomeIcon icon={faCoffee} style={{ margin: "20px" }} size="2x"/>
          <FontAwesomeIcon icon={faCoffee} style={{ margin: "20px" }} size="2x" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
