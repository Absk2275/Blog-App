
import { Link } from "react-router-dom";

import axios from "axios";
import React, { useState,useEffect } from "react";
import { Fragment } from "react";
import './postblog.css'

const ViewBlog = () => {

  var id = sessionStorage.getItem('id');

  const [contacts, setContacts] = useState([]);
  const getAllContacts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("http://localhost:5000/postblog", config);
      setContacts(res.data);
    } catch (err) {
      console.error("error", err);
    }
  };
  useEffect(() => {
    getAllContacts();
  }, []);
 
console.log(contacts);
const mycomp = contacts.filter((obj) => {
  return obj.uid === id;
});
  
  return (

    
    
    <div class="row">
  <div class="column1" >
      <Fragment>
              
      <Link to="/" className="nav-link active text-dark">
                  <i class="fa-solid fa-angle-left "></i>
                </Link>
  
      </Fragment>
  </div>
      {mycomp.length > 0 ? (
        
        mycomp.map((pro) => {
          return (
            <>
            <div class="column2" >
            <form >
                     
                     <div class="form-group">
              <label className="title"><b>{pro.title}</b></label>
            </div>
                     <br></br>
                     <div class="form-group">
              <label className="description"><p>{pro.description}</p></label>
            </div>
            <br></br>
           
              </form>
      
          
            </div>
             <div class="column3" >
             <form >
                      
                      <div class="form-group">
               <img src={pro.image} alt="viewimg"/>
             </div>
                      
            
            
               </form>
             </div>
             </>
          
          );
        })
      ) : (
        <p>Loading...</p>
      )} 
              
      </div>
  );
};

export default ViewBlog;
