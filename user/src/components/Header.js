import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { isAuthenticated, logout } from "../helper/auth";
import withRouter from "./withRouter";
import Komplaint from "./Komplaint.png";

const Header = ({ navigate }) => {
  const handleLogout = (evt) => {
    logout(() => {
      navigate("/signin");
    });
  };

  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/" className="navbar-brand">
        {/* <img src={Komplaint} alt="logo" height={33} width={33} /> */}
        KOMPLAINT
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./SignIn" className="nav-link">
                  <i className="fas fa-edit"></i> SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./SignUp" className="nav-link">
                  <i className="fas fa-sign-in-alt"></i> SignUp
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <li className="nav-item active text-light">
                <Link to="/products/add" className="nav-link">
                  <p className="text-light mt-3 p-0">
                    <i className="fas fa-home"></i>
                    <b>Dashboard</b>
                  </p>
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 1 && (
            <Fragment>
              <li className="nav-item active">
                <Link to="admin/dashboard/Pending" className="nav-link">
                  <i className="fas fa-home"></i> Admin Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 2 && (
            <Fragment>
              <li className="nav-item active">
                <Link to="/department/dashboard" className="nav-link">
                  <i className="fas fa-home"></i> Department Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item">
                <Link to="/signin" className="nav-link" onClick={handleLogout}>
                  <button className="btn btn-warning">
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </button>
                </Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );

  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
