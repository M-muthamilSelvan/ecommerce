import React from "react";
import "../index.css"; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Made with ❤️ by {" "}
          <a href="https://sahibsingh.dev" className="footer-link" target="_blank" rel="noreferrer">
            Muthamil Selvan
          </a>
        </p>
        <a className="footer-icon" href="https://github.com/M-muthamilSelvan" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
