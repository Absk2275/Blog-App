import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import withRouter from "./withRouter";


const Header = () => {
 

  const showNavigation = () => (

    
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <Link to="/" className="navbar-brand">
        <h5>
          <b>Eqiam Blog</b>
        </h5>
      </Link>
    </nav>
  );

  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);