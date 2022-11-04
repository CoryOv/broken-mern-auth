import React, { Component } from "react";
import Navbar from "../layout/Navbar";
// import { Link } from "react-router-dom";
// import "./Styles/tronStyle.css";
// const tronjava = require("./Scripts/tronScript");

class Chatbot extends Component {
    render() {
        return (
            <div><Navbar />
            <div id="stretchFrame">
                { <iframe id="magicFrame"src="https://corys-chatbot.herokuapp.com/" title="ChatBot" width="1600" height="820"></iframe> }
            </div>
            </div>

        );
    }
}

export default Chatbot;