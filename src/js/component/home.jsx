import React from "react";

//include images into your bundle
import Cronometro from "./cronometro"

//create your first component
const Home = () => {
	return (
		<div className="text-center text-align-center">
			<Cronometro/>
		</div>
	);
};

export default Home;
