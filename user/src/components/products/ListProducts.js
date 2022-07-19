import React, { useState, useEffect} from "react";
// import { ProductsData } from "../../ProductsData";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import loaclemail from "../../helper/localemail";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const ListProducts =()=>{
  // const navigate = useNavigate();
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

  // const [currentContact, setCurrentContact] = useState({});
	const [id, setId] = useState("");

	// const getContactById = async (id) => {
	// 	const config = {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	};
	// 	try {
	// 		const res = await axios.get(`http://localhost:5000/postcomp/${id}`, config);
	// 		setCurrentContact(res.data);
	// 	} catch (err) {
	// 		console.error("error", err);
	// 	}
	// };

	// useEffect(() => {
	// 	getContactById(id);
	// }, [id]);

 function handleprint(){
  console.log(id)
 }
  const [open, setOpen] = useState(false);
  function handleClose() {
		setOpen(false);
	}
  function handleClickOpen() {
		setOpen(true);
	}
  

  return (
    
    <div className="listOfProducts">
      <Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogContent>
						<DialogContentText
							component={"div"}
							style={{ textAlign: "center" }}
						>
							<form className="contact-form">
								<input
									type="text"
									name="firstName"
									
									placeholder={id.firstName}
									
									
								></input>
								<br />
								<input
									type="text"
									name="lastName"
									
									placeholder={id.description}
									
									
								></input>
								<br />
								<input
									type="email"
									name="email"
									
									placeholder={id.email}
								
								></input>
								<br />
								<Button className="btn" onClick={() => handleClose()}>
									<Typography className="text-primary">Cancel</Typography>
								</Button>
							</form>
						</DialogContentText>
					</DialogContent>
				</Dialog>
      <div className="productsList">
      {mycomp.length>0 ?(
        mycomp.map((pro) => {
          return (
           <div onClick={() => handleClickOpen()}>
              
                 <div
              className="productDisplay"
              onClick={() => setId(pro)}
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
              </div>
              
         
          );
        })
     
      

      ):
        (
          
            <p>
              No Compalint posted yet
            </p>
          
        )
        }
         </div>
    </div>)
}


export default ListProducts;
