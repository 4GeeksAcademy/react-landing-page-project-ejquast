import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { CardElements } from "./Card.jsx";
import { Footer } from "./Footer.jsx";

export const Home = () => {
	return (<div className="">
		<Navbar />
		<div className="pt-3">
		<Jumbotron />
		</div>
		<div className="pt-3">
		<CardElements />
		</div>
		<div>
		<Footer />
		</div>
	</div>);
};