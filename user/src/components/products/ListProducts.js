import React from "react";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ListProducts() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((pro) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/products/${pro.id}`);
              }}
            >
              <nav class="navbar navbar-expand-lg navbar-light bg-warning rounded">
                {pro.complaint_id}
                <button
                  class="btn btn-outline-secondary my-2 my-sm-0 ms-auto"
                  type="submit"
                >
                  view
                </button>
              </nav>
              <p>{pro.name}</p>
              <p>{pro.description}</p>
              <p>{pro.Complaint_details}</p>
              <p>{pro.Phone_No}</p>
              <p>{pro.image}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;
