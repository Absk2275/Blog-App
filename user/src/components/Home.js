import React ,{useState, useEffect}from "react";
import { Link } from "react-router-dom";

import "./home.css";
import axios from "axios";




function Home() {
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
 
console.log(contacts)

const [id, setId] = useState("");
const [open, setOpen] = useState(false);
const redirect = (pro) =>{
  sessionStorage.setItem("id", pro.uid)
}




  return (
    <>
    

<div class="container-2">
       

    

        <div class="flex-box-container-2" >
        {contacts.length > 0 ? (
        
        contacts.map((pro) => {
          return (
            
        <div onClick={()=>setId(pro)}>
          <div class="card" >
          <div class="card-header" >
            <img src={pro.image} alt="img" />
          </div>
          <div class="card-body">
          
            <h4>
            {pro.title}
            </h4>
            <p>
            {pro.description.substring(0, 70) + "..."}
            </p>
            
          </div>
          <Link to="/viewblog" className="nav-link active text-dark"> <button onClick={()=>redirect(pro)}>view</button></Link>
          </div>
          </div>
          
          );
        })
      ) : (
        <p>Loading...</p>
      )} 
        </div>
    </div>


  
    
     <Link to="/postblog" id="mybutton">
     
      <i className="fa-solid fa-circle-plus fa-beat  fa-3x" title="Create Blog " id="addpost"></i>
      
      </Link>
    </>
   
  );
}

export default Home;