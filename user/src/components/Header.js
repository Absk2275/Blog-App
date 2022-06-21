import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { isAuthenticated, logout } from "../helper/auth";
import withRouter from "./withRouter";

const Header = ({ navigate }) => {
  const handleLogout = (evt) => {
    logout(() => {
      navigate("/signin");
    });
  };

  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        LOGO
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
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./SignIn" className="nav-link">
                  SignIn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./SignUp" className="nav-link">
                  SignUp
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <li className="nav-item active">
                <Link to="/user/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 1 && (
            <Fragment>
              <li className="nav-item active">
                <Link to="/admin/dashboard" className="nav-link">
                  Admin
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 2 && (
            <Fragment>
              <li className="nav-item active">
                <Link to="/department/dashboard" className="nav-link">
                  Department
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item active">
                <button className="btn btn-warning" onClick={handleLogout}>
                  Logout
                </button>
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