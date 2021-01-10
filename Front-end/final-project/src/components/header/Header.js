import React from "react";
import "../../Greentheme.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
    // THINK TO TOKEN HEADER + FORUM HEADER

    return (
        <header className="header">
            <nav className="nav">
                <Link className="nav_link" to="/">ACCUEIL</Link>
                <Link className="nav_link" to="/univers">Univers</Link>
                <Link className="nav_link" to="/forum">Forum</Link>
                <Link className="nav_link" to="/sign-in">CONNEXION</Link>
                <Link className="nav_link" to="/sign-up">Inscription</Link>
                {/* <button onClick={this.onSignout} className="signout_btn">
                    Sign out
            </button> */}
            </nav>
        </header>
    );
}

export default Header;
