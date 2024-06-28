import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export const Navbar = () => {
    return(
        <div >
            <Nnavbar />
        </div>
    )
};

function Nnavbar() {
	return (
		<nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark" >
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <div className="navbar-nav d-flex">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    <a className="nav-link text-light" href="#">About</a>
                    <a className="nav-link text-light" href="#">Services</a>
                    <a className="nav-link text-light" href="#">Contact</a>
                </div>
            </div>
        </nav>
	);
};