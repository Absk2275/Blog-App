import React, { useState, useEffect} from "react";
import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import loaclemail from "../../helper/localemail";


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
  // console.log(contacts);
  const mycomp = contacts.filter((obj) => {
    return obj.email === loaclemail();
  });
  mycomp.sort(function (a, b) {
    return a.uid - b.uid;
  });
  
  // sort by name
  mycomp.sort(function(a, b) {
    const nameA = a.uid; // ignore upper and lowercase
    const nameB = b.uid; // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  console.log(mycomp);

  const [currentContact, setCurrentContact] = useState({});
	const [id, setId] = useState("");

	const getContactById = async (id) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.get(`http://localhost:5000/contact/${id}`, config);
			setCurrentContact(res.data);
		} catch (err) {
			console.error("error", err);
		}
	};

	useEffect(() => {
		getContactById(id);
	}, [id]);


  if(mycomp.length>0){
  return (
    <div className="listOfProducts">
      <div className="productsList">
        {mycomp.map((pro) => {
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
      else{
        return(
          <div className="listOfProducts">
          <div className="productsList">
            <p>
              No Compalint posted yet
            </p>
          </div>
          </div>
        )
      }
}

export default ListProducts;
