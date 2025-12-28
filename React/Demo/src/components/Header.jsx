import React from 'react';
import {Link} from "react-router-dom";

const Header= () =>{
    return(
        <>
        <div className="bg-primary d-flex justify-content-between">
            <h1>My Website</h1>
            <div className="d-flex gap-5 ">
                <Link to={"/Home"} className="text-decoration-none text-white">Home</Link>
                <Link to={"/About"} className="text-decoration-none text-white">About</Link>
                <Link to={"/Product"} className="text-decoration-none text-white">Product</Link>
                <Link to={"/Contact"} className="text-decoration-none text-white">Contact</Link>
            </div>
        </div>
        </>
    );
};
export default Header;