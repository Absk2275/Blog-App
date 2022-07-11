import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

function Products() {
  return (
    <div className="products">
      <div className="productsNav">
        <NavLink to="/products/search"> My Profile </NavLink>
        <NavLink to="/products/add"> Post Complaint </NavLink>
        <NavLink to="/products/list"> My Complaint </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;
