import React, { useState, useEffect} from "react";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";


const ListProducts =()=>{
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const getAllContacts = async () => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.get("http://localhost:5000/postcomp", config);
			setContacts(res.data);
		} catch (err) {
			console.error("error", err);
		}
	};

	useEffect(() => {
		getAllContacts();
	}, []);
  console.log(contacts);
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {contacts.map((pro) => {
          return (
            <div
              className="productDisplay"
             
            >
              <nav class="navbar navbar-expand-lg navbar-light bg-warning rounded">
                {pro.uid}
                <button
                  class="btn btn-outline-secondary my-2 my-sm-0 ms-auto"
                  type="submit"
                >
                  view
                </button>
              </nav>
              <p>{pro.firstName}</p>
              <p>{pro.lasttName}</p>
              <p>{pro.description}</p>
              
              <p>{pro.phoneNo}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;
