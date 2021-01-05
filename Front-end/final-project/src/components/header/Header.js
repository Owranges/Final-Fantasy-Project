import React from "react";

function Header() {

    return (
        <header className="header">
            <nav className="nav">
                <Link className="nav_link" to="/">
                    Home
            </Link>
                <Link className="nav_link" to="/productform">
                    Product Form
            </Link>

                <Link className="nav_link" to="/cart">
                    cart
            </Link>
                <img
                    onClick={() => this.imageOnclick()}
                    src={this.props.signinStore.userInfo.profile_picture}
                    alt="profil_Picture"
                />
                {/* pensez a ajouter le panier */}
                <button onClick={this.onSignout} className="signout_btn">
                    Sign out
            </button>
            </nav>
        </header>
    );
}

export default Header;
