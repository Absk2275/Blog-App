import React from "react";
import "./PostComplaint.css";
function AddProduct() {
  return (
    <div className="post">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1> Post Complaint</h1>
            <form className="alerts" id="contact-form" action="/" method="post">
              <h3>User Details</h3>
              <div>
                <label>
                  <span className="lead">First Name</span>
                  <input placeholder="Enter Your First Name" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Last Name</span>
                  <input placeholder="Enter Your Last Name" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Email </span>
                  <input placeholder="Enter Your Email" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Phone Number </span>
                  <input placeholder="Enter Your Number" type="tel" />
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">District</span>
                  <select className="District" id="text">
                    <option value="1" data-select2-id="28">
                      Gangtok
                    </option>
                    <option value="2" data-select2-id="29">
                      Gyalshing
                    </option>
                    <option value="3" data-select2-id="30">
                      Mangan
                    </option>
                    <option value="4" data-select2-id="31">
                      Namchi
                    </option>
                    <option value="5" data-select2-id="32">
                      Pakyong
                    </option>
                    <option value="7" data-select2-id="33">
                      Soreng
                    </option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Block</span>
                  <select name="District" id="text">
                    <option>Tadong</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">GPU</span>
                  <select name="District" id="text">
                    <option>Tadong</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Ward</span>
                  <select name="District" id="text">
                    <option>Tadong</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Habitation</span>
                  <select name="District" id="text">
                    <option>Tadong</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Pincode</span>
                  <input placeholder="Enter Pincode" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Your Address</span>
                  <input placeholder="Enter Your Address" type="text" />
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Department</span>
                  <select name="District" id="text">
                    <option>Texas</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  <span className="lead">Description</span>
                  <textarea
                    column="6"
                    name="complaint"
                    id="complaint"
                    placeholder="Enter Descrpition"
                    required=""
                  ></textarea>
                </label>
              </div>
              <br></br>

              <div>
                <button name="submit" type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
