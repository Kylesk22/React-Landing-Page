import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Jumbotron = () => {
	return (<div className="jumbotron">
        <h1>A Warm Welcome!</h1>
        <p>Check out this React jumbotron! This is one of the components created for this React landing page.</p>
        <button type="button" className="btn btn-primary">Click here!</button>
        
        
    </div>)
};

export default Jumbotron;
