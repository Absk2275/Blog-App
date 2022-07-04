import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";

function Products() {
  return (
    <div className="products">
      <div className="productsNav">
        <Link to="/products/search"> My Profile </Link>
        <Link to="/products/add"> Post Complaint </Link>
        <Link to="/products/list"> My Complaint </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;
