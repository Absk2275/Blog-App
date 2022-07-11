import "./PostComplaint.css";
import React, { useState } from "react";

const countriesData = [
  { name: "Select District", states: ["Select block"] },
  {
    name: "Gangtok",
    states: [
      "Gangtok(Nandok)",
      "Khamdong",
      "Martam",
      "Parakha",
      "Rakdong_Tintek",
      "Ranka",
      "Reghu",
      "Rhenock",
    ],
  },
  {
    name: "Gyalshing",
    states: [
      "Chongrang",
      "Chumdung",
      "Daramdin",
      "Dentam",
      " Gyalshing",
      "Hee_Martam",
      "Kaluk",
      "Mangalbarey",
      "Soreng",
      " Yuksom",
    ],
  },
  {
    name: "Mangan",
    states: ["Chungthang", " Kabi", " Mangan", "Passingdang"],
  },
  {
    name: "Namchi",
    states: [
      "Jorthang",
      " Namchi",
      " Namthang",
      "Ravangla",
      " Sikkip",
      "Sumbuk",
      " Timi_Tarku",
      "Yangang",
    ],
  },
  {
    name: "Pakyong",
    states: ["Duga", "Pakyong"],
  },
  {
    name: "Soreng",
    states: ["Soreng"],
  },
];

function Form() {
  const [{ country, state }, setData] = useState({
    country: "Select District",
    state: "",
  });

  const countries = countriesData.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const states = countriesData
    .find((item) => item.name === country)
    ?.states.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ));

  function handleCountryChange(event) {
    setData((data) => ({ state: "", country: event.target.value }));
  }

  function handleStateChange(event) {
    setData((data) => ({ ...data, state: event.target.value }));
  }

  return (
    <div className="Postmain">
      <div className="post">
        <div className="title">Post Complaint</div>
        <div className="content">
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>

              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>

              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" placeholder="Enter your address" required />
              </div>

              <div className="input-box">
                <span className="details">Pincode</span>
                <input type="text" placeholder="Enter pincode" required />
              </div>

              <div className="input-box">
                <span className="details">District</span>

                <select value={country} onChange={handleCountryChange}>
                  {countries}
                </select>
              </div>
              <div className="input-box">
                <span className="details">Block</span>

                <select value={state} onChange={handleStateChange}>
                  {states}
                </select>
              </div>
            </div>

            <div className="input-box">
              <label>
                <span className="details">Complaint Description</span>
                <textarea
                  column="13"
                  name="complaint"
                  id="complaint"
                  placeholder="Enter Complaint Descrpition"
                  required=""
                ></textarea>
              </label>
            </div>
            <div class="button">
              <input type="submit" value="Post" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
