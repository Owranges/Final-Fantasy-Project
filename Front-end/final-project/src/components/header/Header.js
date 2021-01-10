import React from "react";
import "../../Greentheme.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import fflogo from '../../Img/HeaderImg/FFVIILogo.png';
function Header() {
    // THINK TO TOKEN HEADER + FORUM HEADER

    return (
        <header className="header">
            <nav className="nav">
                <img src={fflogo} className='logoImg' alt='Logo meteor from ff7' />
                <span className="siteTitle">FIRST FANTASY</span>
                <Link className="nav_link" to="/">ACCUEIL</Link>
                <Link className="nav_link" to="/univers">UNIVERS</Link>
                <Link className="nav_link" to="/forum">FORUM</Link>
                <Link className="nav_link" to="/sign-in">CONNEXION</Link>
                <Link className="nav_link" to="/sign-up">INSCRIPTION</Link>
                {/* <button onClick={this.onSignout} className="signout_btn">
                    Sign out
            </button> */}
            </nav>
        </header>
    );
}

export default Header;
