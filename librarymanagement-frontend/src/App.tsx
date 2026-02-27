import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          backgroundColor: "#ffffff",
          minHeight: "100vh",
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Navbar />

        <main
          style={{
            padding: "20px",
            maxWidth: "900px",
            margin: "0 auto",
            flex: 1
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
