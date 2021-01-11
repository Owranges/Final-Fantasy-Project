import React from "react";
import "../../Greentheme.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Footer() {
    // THINK TO TOKEN Footer + FORUM Footer
    const theDate = new Date()
    const dateCopy = `${theDate.getFullYear()} Copyright: Brunet Frank-Owen`
    return (
        <footer className="footer">
            <nav className="nav">
                <Link className="nav_link" to="/site-map">PLAN DU SITE</Link>
                <Link className="nav_link" to="/mentions-legales">MENTIONS LEGALES</Link>
                <Link className="nav_link" to="/cgu">CONDITIONS GENERAL / CGU</Link>
                <Link className="nav_link" to="/contact">Contact : frank.owen.brunet@gmail.com</Link>
                <span>{dateCopy}</span>
                {/* <button onClick={this.onSignout} className="signout_btn">
                    Sign out
            </button> */}
            </nav>
        </footer>
    );
}

export default Footer;
