import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: "#9999ff",
      color: "#fff",
      textAlign: "center",
      padding: "15px 0",
      marginTop: "40px",
      borderRadius: "10px 10px 0 0"
    }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Library Management System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
