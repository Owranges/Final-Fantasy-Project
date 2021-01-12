import React from "react";
<<<<<<< HEAD:Front-end/final-project/src/components/header/Header.js
import "../../Greentheme.css"
<<<<<<< HEAD
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
                <Link className="nav_link" to="/inscription">Inscription</Link>
                {/* <button onClick={this.onSignout} className="signout_btn">
                    Sign out
            </button> */}
            </nav>
        </header>
    );
}

export default Header;
=======
=======
import "../../themeColor/Greentheme.css"
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b:Front-end/final-project/src/Global/header/Header.js
import fflogo from '../../Img/HeaderImg/FFVIILogo.png';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { signoutAction } from "../../storeRedux/actions/SignoutActions";

function Header(props) {
    // THINK TO TOKEN HEADER + FORUM HEADER
    const onSignout = () => {
        props.signoutAction();
        props.history.push("/");
    };
    const token = props.signinStore.userToken
    return (

        <header className="header">
            {token ? <nav className="nav">
                <img src={fflogo} className='logoImg' alt='Logo meteor from ff7' />
                <span className="siteTitle">FIRST FANTASY</span>
                <Link className="nav_link" to="/">ACCUEIL</Link>
                <Link className="nav_link" to="/univers">UNIVERS</Link>
                <Link className="nav_link" to="/forum">FORUM</Link>
                <Link className="nav_link" to="/edit-profile">PROFIL</Link>
                <button onClick={onSignout} className="signout_btn">
                    DECONNEXION
            </button>
            </nav>
                : <nav className="nav">
                    <img src={fflogo} className='logoImg' alt='Logo meteor from ff7' />
                    <span className="siteTitle">FIRST FANTASY</span>
                    <Link className="nav_link" to="/">ACCUEIL</Link>
                    <Link className="nav_link" to="/univers">UNIVERS</Link>
                    <Link className="nav_link" to="/forum">FORUM</Link>
                    <Link className="nav_link" to="/sign-in">CONNEXION</Link>
                    <Link className="nav_link" to="/sign-up">INSCRIPTION</Link>
                </nav>}
        </header>

    );
}



const mapDispatchToProps = { signoutAction };
const mapStateToProps = (state) => ({
    signinStore: state.signin,
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

<<<<<<< HEAD:Front-end/final-project/src/components/header/Header.js
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b:Front-end/final-project/src/Global/header/Header.js
