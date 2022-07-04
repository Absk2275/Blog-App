import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../ProductsData";
import "./PostComplaint.css";

function ProductDisplay() {
  const { id } = useParams();
  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
          {ProductsData[id - 1].complaint_id}{" "}
        </nav>
        <p>{ProductsData[id - 1].name}</p>
        <p>{ProductsData[id - 1].description}</p>{" "}
        <p>{ProductsData[id - 1].Complaint_details}</p>{" "}
        <p>{ProductsData[id - 1].Phone_No}</p>{" "}
        <p>{ProductsData[id - 1].image}</p>{" "}
      </div>
    </div>
  );
}

export default ProductDisplay;
