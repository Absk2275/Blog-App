import React from "react";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
import "../App.css";
function ListProducts() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {ProductsData.map((product) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
                {product.complaint_id}
                <button
                  class="btn btn-outline-secondary my-2 my-sm-0 ms-auto"
                  type="submit"
                >
                  view
                </button>
              </nav>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.Complaint_details}</p>
              <p>{product.Phone_No}</p>
              <p>{product.image}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;
