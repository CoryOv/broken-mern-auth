import React, { Component } from "react";
import Navbar from "../layout/Navbar";
// import { Link } from "react-router-dom";
// import "./Styles/tronStyle.css";
// const tronjava = require("./Scripts/tronScript");

class Compvision extends Component {
    render() {
        return (
            <div><Navbar />
            <div id="stretchFrame">
                { <iframe id="magicFrame"src="./WEBCAMML/index.html" title="Machine learning image recognition" width="1500" height="842"></iframe> }
            </div>
            </div>

        );
    }
}

export default Compvision;