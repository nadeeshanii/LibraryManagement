import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        color: "#3d1d28"
      }}
    >
      <h1>Welcome to Library Management System</h1>
      <p>Manage your books easily and efficiently.</p>

      <Link
        to="/books"
        style={{
          backgroundColor: "#9999ff",
          color: "white",
          padding: "12px 25px",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Go to Books
      </Link>
    </div>
  );
};

export default Home;
