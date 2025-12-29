import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home.Jsx";
import Product from "./pages/Product";
import Login from "./pages/Login"
import Signup from "./pages/SignUp"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Product"element={<Product/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;

