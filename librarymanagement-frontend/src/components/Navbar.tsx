import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{
      backgroundColor: "#9999ff",
      padding: "15px 30px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <h1 style={{ margin: 0 }}>Library Management</h1>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "15px", textDecoration: "none" }}>Home</Link>
        <Link to="/books" style={{ color: "#fff", textDecoration: "none" }}>Books</Link>
      </div>
    </nav>
  );
};

export default Navbar;
