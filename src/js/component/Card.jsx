import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export const CardElements = () => {
    return(
        <div className="row align-tems-center justify-content-center text-center">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    )
};

function Cards() {
	return (
		<div className="card col-3" style={{width:"18rem"}}>
 		    <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
		        <p className="card-text">Minim sint consectetur commodo labore laborum et occaecat aliquip pariatur non est eu non.</p>
                <button type="button" className="btn btn-primary">Check out more!</button>
		    </div>
		</div>
	);
};