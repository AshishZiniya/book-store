import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center my-2 py-2 border-top">
      <div className="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</div>
      <Link to='/home' className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src={logo} height={70} alt="logo" className="navbar-brand" />
      </Link>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <Link to='/' className="nav-link px-2 text-body-secondary">Home</Link>
        </li>
        <li className="nav-item">
          <a href="#books" className="nav-link px-2 text-body-secondary">Books</a>
        </li>
        <li className="nav-item">
          <a href="#search" className="nav-link px-2 text-body-secondary">Search</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">FAQs</a>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link px-2 text-body-secondary">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
