import React from 'react';
import {Link} from "react-router-dom";

const Header= () =>{
    return(
        <>
        <div className="">
            <h1>My Website</h1>
            <div className="d-flex gap-3">
                <Link to={"/Home"} className="decoration-none text-white">Home</Link>
                <Link to={"/About"} className="decoration-none text-white">About</Link>
                <Link to={"/Product"} className="decoration-none text-white">Product</Link>
                <Link to={"/Contact"} className="decoration-none text-white">Contact</Link>
            </div>
        </div>
        </>
    );
};
export default Header;