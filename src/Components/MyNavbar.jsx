import React, { useState } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

function MyNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
  };

  return (
    <Navbar expand="lg" className={`px-3 ${darkMode ? "bg-dark" : "bg-slate-800"}`}>
      <Container className="d-flex justify-between items-center w-full">
        <div className="d-flex align-items-center">
          <img
            className="w-20 ml-8 h-20"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCNK-PYG39RFj7gzxXHSyEUW1przH18WjVefG7nxNAHoO2CabOE-8nU6WtY8rbNjxy2ZxtucAH7ICCB3S40x4CUfAlOSYvQlEYG3KEGFbJ1voc2hXdg7aWHC2XZPW7dy9CyLEwps1npTlV/s1600/Party.png"
            alt="Logo"
            width="50"
            height="50"
          />
          <h1 className="text-white font-bold ms-3">
            Crazy🩷<span className="flex">Calculator</span>
          </h1>
        </div>

        <div className="d-flex align-items-center">
          {/* Dark Mode Toggle */}
          <Button variant="outline-light" className="me-3" onClick={toggleDarkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </Button>

          {/* Login Button */}
          <Button variant="primary">Login</Button>
        </div>

      </Container>
    </Navbar>
  );
}

export default MyNavbar;
