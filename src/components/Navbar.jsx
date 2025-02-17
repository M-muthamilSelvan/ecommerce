import React, { useState } from "react"; 
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import "../index.css"; // Your custom CSS

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">React Ecommerce</NavLink>
        
        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/product">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
          
          {/* Buttons */}
          <div className="d-flex gap-2">
            <NavLink to="/login" className="btn btn-outline-primary"><i className="fa fa-sign-in-alt"></i> Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-secondary"><i className="fa fa-user-plus"></i> Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark">
              <i className="fa fa-shopping-cart"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
