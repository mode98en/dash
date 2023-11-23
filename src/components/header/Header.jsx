import React from "react";
import Container from "../containter/Container";
import "./Header.css";

function Header() {
  return (
    <div className="border">
      <Container>
        <div className="header">
          <h1 className="DB">Dashboard</h1>
          <div className="user">
            <p className="Admin">Admin</p>
            <div className="img"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
