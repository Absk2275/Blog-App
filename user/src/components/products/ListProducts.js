import React, { useState, useEffect } from "react";
// import { ProductsData } from "../../ProductsData";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import loaclemail from "../../helper/localemail";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const ListProducts = () => {
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
  mycomp.sort(function (a, b) {
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

  function handleprint() {
    console.log(id);
  }
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <div class="row justify-content-evenly mt-2">
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText component={"div"} style={{ textAlign: "center" }}>
            <form className="contact-form ">
              <nav class="navbar card-header  ">
                <Button
                  class="btn-close ms-auto "
                  aria-label="Close"
                  onClick={() => handleClose()}
                ></Button>
              </nav>
              <div className="card">
                <h4>
                  <b>Complianer Details</b>
                </h4>
                <p class="m-0">
                  <i class="fa-solid fa-user"></i>{" "}
                  <h>
                    {" "}
                    {id.firstName} {id.lastName}
                  </h>
                </p>
                <p class="m-0">
                  <i class="fa-solid fa-location-dot"></i> {id.address}
                </p>
                <p class="m-0">
                  <b>District: </b> {id.district}
                </p>
                <p class="m-0">
                  <b>Block: </b> {id.block}
                </p>
                <p class="m-0">
                  <b>Pincode: </b> {id.pincode}
                </p>
                <container>
                  <Button class="btn btn-primary  btn-sm" disabled>
                    <i class="fa-solid fa-envelope"></i> {id.email}
                  </Button>
                  <Button class="btn btn-primary  btn-sm m-1" disabled>
                    {" "}
                    <i class="fa-solid fa-phone"></i> {id.phoneNo}
                  </Button>
                </container>
              </div>

              <br></br>
              <div className="card">
                <h4>
                  <b>Complaint Details</b>
                </h4>
                <p class="m-0">
                  <Button class="btn btn-primary  btn-sm m-1" disabled>
                    {" "}
                    Complaint ID: {id.uid}
                  </Button>
                  <p>
                    <b>Department: </b> {id.department}
                  </p>
                  <p class="m-0">
                    <i class="fa-solid fa-comment-dots"></i>
                    <b> Description :</b> {id.description}
                  </p>
                </p>
              </div>
              <br></br>
              <div className="card">
                <h4>
                  <b>Assigned Employee</b>
                </h4>
                <p class="m-0">
                  <Button class="btn btn-primary  btn-sm m-1" disabled>
                    {" "}
                    Complaint ID: {id.uid}
                  </Button>
                  <p>
                    <b>Department: </b> {id.department}
                  </p>
                  <p class="m-0">
                    <i class="fa-solid fa-comment-dots"></i>
                    <b> Description :</b> {id.description}
                  </p>
                </p>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <div className="colu">
        {mycomp.length > 0 ? (
          mycomp.map((pro) => {
            return (
              <div onClick={() => handleClickOpen()}>
                <div class="card m-3 p-0" onClick={() => setId(pro)}>
                  <nav className="navbar card-header ">
                    <h5>{pro.department}</h5>
                    <button className="btn btn-primary my-2 my-sm-0 ms-auto disabled">
                      Complaint ID: {pro.uid}
                    </button>
                  </nav>

                  <div class="card-body">
                    <h5 class="card-title">
                      {pro.firstName} {pro.lastName}
                    </h5>

                    <p>{pro.address}</p>
                    <p>{pro.phoneNo}</p>

                    <button class="btn btn-primary">view</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Compalint posted yet</p>
        )}
      </div>
    </div>
  );
};

export default ListProducts;
