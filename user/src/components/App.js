import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import DepartmentDashboard from "./DepartmentDashboard";

import Products from "./products/Products";
import Form from "./products/AddProduct";
import ProductDisplay from "./products/ProductDisplay";
import ListProducts from "./products/ListProducts";
import Search from "./products/Search";

import AdminDashboard from "./AdminDashboard";
import Inprogress from "./AdminComponents/Inprogress";
import Pending from "./AdminComponents/Pending";
import DataDisplay from "./AdminComponents/DataDisplay";
import Resolved from "./AdminComponents/Resolved";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />

        {/* <Route exact path="/user/dashboard" element={<UserDashboard />}> */}

        <Route path="/Products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<Form />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>

        <Route path="/admin/dashboard" element={<AdminDashboard />}>
          <Route path="Pending" element={<Pending />} />
          <Route path="Inprogress" element={<Inprogress />} />
          <Route path="Resolved" element={<Resolved />} />
          <Route path=":uid" element={<DataDisplay />} />
        </Route>

        <Route
          exact
          path="/department/dashboard"
          element={<DepartmentDashboard />}
        />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
