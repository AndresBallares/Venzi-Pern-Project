import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


class NavBar extends Component {
    render () {
        return (
            <nav className="navbar">
                <img src="file:///Users/maurolozano/Pictures/Photos%20Library.photoslibrary/private/com.apple.Photos" alt="logo" />
                    
                <button className="button">
                <Link to="/jewelry/CreateJewelry">Customize</Link>
                </button>
                
            </nav>
        )
    }
} 

export default NavBar;