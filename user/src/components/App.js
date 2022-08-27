import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Home from "./Home";

import ViewBlog from "./ViewBlog";
import PostBlog from "./PostBlog";




const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/viewblog" element={<ViewBlog />} />
        <Route exact path="/postblog" element={<PostBlog />} />

       </Routes>
    </main>
  </BrowserRouter>
);

export default App;
