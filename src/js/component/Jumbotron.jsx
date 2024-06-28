import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export const Jumbotron = () => {
    return(
        <div className="justify-content-center align-items-center mx-auto">
            <Jjumbotron/>
        </div>
    )
};

function Jjumbotron() {
	return (
		<div className="container-fluid bg-light px-4" style={{width:"72rem"}}>
 		<p className="fs-1">A Warm Welcome!</p>
		<h5>Minim sint consectetur commodo labore laborum et occaecat aliquip pariatur non est eu non.</h5>
		<button type="button" className="btn btn-primary mb-5 mt-2">Call to action!</button>
		</div>
	);
};