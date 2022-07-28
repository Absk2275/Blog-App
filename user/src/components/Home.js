import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.css";

import first_slide from "./slideshow/first_slide.png";
import second_slide from "./slideshow/second_slide.png";
import third_slide from "./slideshow/third_slide.png";

function Home() {
  return (
    <div>
      <div class="carousel-wrapper">
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          <div>
            <img src={first_slide} alt="First slide" height={350} width={90} />
          </div>
          <div>
            <img
              src={second_slide}
              alt="second slide"
              height={350}
              width={90}
            />
          </div>
          <div>
            <img src={third_slide} alt="third slide" height={350} width={90} />
          </div>
        </Carousel>
      </div>

      <div id="about" class="container-fluid">
        <div class="row">
          <h2>About Complaint Management</h2>
          <br></br>
          <p className="AboutText">
            Complaint Registration and Management System (CRMS) is an online
            platform available to the citizens 24x7 to lodge their grievances to
            the public authorities on any subject related to service delivery.
            It is a single portal connected to three major department of
            Government of Sikkim that is Power Department, Public Health and
            Engineering Department Water (PHE-Water) and Public Health and
            Engineering Department Sewage (PHE-Sewage). Every department have
            role-based access to this system.Complaint Management portal is also
            accessible to the citizens through mobiles, tablets and PC's.
          </p>
          <br></br>
          <p className="AboutText">
            The status of the grievance filed in Complaint Manegement can be
            tracked with the unique registration ID provided at the time of
            registration of the complainant. Complaint Management also provides
            tracking facility to the citizens so they can track complaint
            anytime. After closure of grievance if the complainant is not
            resolved, he/she can post the complaint again. The status of the
            Appeal can also be tracked by the petitioner with the grievance Id.
          </p>
          <br></br>
        </div>

        <div className="notissues">
          <ul class="mt-2 list-style-none pb-0">
            <span className="textinfo">
              <i class="fa fa-info-circle"> </i>
              <b>Issues which are not taken up for redress : </b>
            </span>
            <li class="ml-3">
              <i class="fa fa-caret-right"></i>
              Home Department
            </li>
            <li class="ml-3">
              <i class="fa fa-caret-right"></i>
              Horticulture Department
            </li>
            <li class="ml-3">
              <i class="fa fa-caret-right"></i>
              Information Technology Department
            </li>

            <li class="ml-3">
              <i class="fa fa-caret-right"></i>
              Labour Department
            </li>
            <li class="ml-3">
              <i class="fa fa-caret-right"></i>
              Law Department
            </li>

            <li class="ml-3">
              <i class="fa fa-caret-right"></i>
              Police Department.
            </li>
          </ul>
        </div>

        <div class="containersss">
          <div class="section-title">
            <h2>How To Post Grievance</h2>
          </div>
          <div class="row">
            <div class="row order-2 order-lg-1">
              <div class="icon-box col-lg-6 mt-lg-0">
                <i class="bx bx-receipt"></i>
                <h4>1. Register in CRMS</h4>
                <p>Goto CRMS and create an account.</p>
              </div>
              <div class="icon-box col-lg-6">
                <i class="bx bx-cube-alt"></i>
                <h4>2. Login using CRMS Account</h4>
                <p>Goto CRMS and login using your CRMS Credentials</p>
              </div>
              <div class="icon-box col-lg-6">
                <i class="bx bx-file"></i>
                <h4>3. Fill the Form</h4>
                <p>Fill Grievance Form and Submit.</p>
              </div>
            </div>
          </div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  );
}
export default Home;
