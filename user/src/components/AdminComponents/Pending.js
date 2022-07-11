import React from "react";
import { UserData } from "./UserData";
import { useNavigate } from "react-router-dom";

function Pending() {
  const navigate = useNavigate();
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {UserData.map((pro) => {
          return (
            <div
              className="productDisplay"
              onClick={() => {
                navigate(`/UserData/${pro.uid}`);
              }}
            >
              <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
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

export default Pending;
