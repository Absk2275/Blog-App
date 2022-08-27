
import React , {Fragment, useState} from "react";
import {Link} from 'react-router-dom';
import './postblog.css'
import isEmpty from "validator/lib/isEmpty";
import { postcomp } from "../api/auth";
import { showErrorMsg, showSuccessMsg } from "../helper/message";
 import { showLoading } from "../helper/loading";
import FileBase64 from "react-file-base64"

const PostBlog = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image:"",
    errormsg: false,
    successmsg: false,
    loading: false,
  });

  const {
    title,
    description,
    image,
    errormsg,
    successmsg,
    loading,
  } = formData;

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errormsg: "",
      successmsg: "",
    });
  };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);

    if (
      isEmpty(title) ||
      isEmpty(description)
    ) {
      setFormData({
        ...formData,
        errormsg: "All fields are required !",
      });
    } 
     else if (isEmpty(title)) {
      setFormData({
        ...formData,
        errormsg: " Title Missing",
      });
    } else {
      const {
        title,image,
        description,
      } = formData;
      const data = {
        title,
        image,
        description,
      };

      setFormData({
        ...formData,
        loading: true,
        errormsg: "",
      });
      postcomp(data)
      .then((response) => {
        console.log("Axios Post Blog success", response);
        setFormData({
          ...formData,

          successmsg: response.data.successMessage,
          title:"",
          description: "",
          image:"",
          loading: false,
          errormsg: "",
          
        });
      })
      .catch((error) => {
        console.log("Axios Post Complaint error", error);
        setFormData({
          ...formData,
          loading: false,
          errormsg: error.response.data.errorMessage,
        });
      });
     
        
    }
  };
  const ShowSignUpForm = () => (
<div class="row">
  <div class="column1" >
      <Fragment>
              
        <Link to="/" className="nav-link active text-primary">
         <i className="fas fa-home"></i> <b>Home</b>
        </Link>       
      </Fragment>
  </div>
  <div class="column2" >
  <form onSubmit={handleSubmit} >
           <p><label>Write A Blog</label></p>
           <div class="form-group">
    <label>Title</label>
    <input type="text" class="form-control" placeholder="Blog Title" name="title" value={title} onChange={handleChange}/>
  </div>
           <br></br>
           <div class="form-group">
    <label >Description</label>
    <textarea class="form-control"  rows="7" placeholder="Blog Description" name="description" value={description} onChange={handleChange}></textarea>
  </div>
  <br></br>
  <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
        />
        
         <br></br>
         <input type="submit" value="Submit"/>
    </form>
  </div>
 
</div>


  )

  
  return (
    
    <div className="containe">
           {successmsg && showSuccessMsg(successmsg)}
           {loading && <div className="text-center pb=4">{showLoading()}</div>}
           {errormsg && showErrorMsg(errormsg)}
           {ShowSignUpForm()}
        </div>
  );
};

export default PostBlog;


