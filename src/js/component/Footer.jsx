import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export const Footer = () => {
    return(
        <div className="container">
            <Ffooter />
        </div>
    )
};

function Ffooter() {
	return (
		<nav className="navbar fixed-bottom bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand text-light" href="#">Copyright © Your Website 2024</a>
            </div>
        </nav>
	);
};