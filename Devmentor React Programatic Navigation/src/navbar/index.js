import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Navbar(){
        return(
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About us</Link></li>
                <li><Link to="/posts">(Not Working) Random Post</Link></li>
                <li><Link to="/step1">Step 1</Link></li>
            </ul>
        )
}