import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import DepartmentDashboard from "./DepartmentDashboard";
//import AdminRoute from "./AdminRoute";
// import UserRoute from "./UserRoute";
// import DepartmentRoute from "./DepartmentRoute";
import ProtectedRoute from "./ProtectedRoute";

import NotFound from "./NotFound";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/user/dashboard" element={<UserDashboard />} />
        <Route
          exact
          path="/admin/dashboard"
          element={<ProtectedRoute Component={AdminDashboard} />}
        />
        <Route
          exact
          path="/department/dashboard"
          element={<DepartmentDashboard />}
        />

        <Route element={<NotFound />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
