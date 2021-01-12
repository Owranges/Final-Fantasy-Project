import React, { useState } from 'react';
import "./Signin.css"
import Header from "../../Global/header/Header"
import Footer from "../../Global/footer/Footer"
import axios from "axios"
import { connect } from "react-redux";
import { signinAction } from "../../storeRedux/actions/SigninActions";
import jwt_decode from "jwt-decode";

function Signin(props) {
    const [incorrect, setIncorrect] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const formSubmit = () => {
        const formValues = {
            email: email,
            password: password,
        }
        axios.post("http://localhost:8000/user/sign-in", formValues)
            .then(response => {
                if (response.data === "Email or Password is incorrect") {
                    setIncorrect(false)
                }
                else if (response.data.auth) {
                    let tokenDecoded = jwt_decode(response.data.token);
                    props.signinAction({ tokenDecoded, token: response.data.token });
<<<<<<< HEAD
<<<<<<< HEAD
                    // props.history.push("/");
=======
                    // props.history.push("/edit-profile");
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
                    // props.history.push("/edit-profile");
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
                }
            }).catch(err => {
                console.log(err);
            })
    }

<<<<<<< HEAD
<<<<<<< HEAD
    console.log(props);
=======
    const pushSignup = () => {
        props.history.push("/sign-up")
    }
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const pushSignup = () => {
        props.history.push("/sign-up")
    }
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
    return (

        <div>
            < Header />
            <div className="signin">
                <p className="signinMsg">Vous ne possédez pas encore de compte</p>
<<<<<<< HEAD
<<<<<<< HEAD
                <button className="btnGreen"> S'INSCRIRE</button>
=======
                <button className="btnGreen" onClick={pushSignup}> S'INSCRIRE</button>
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
                <button className="btnGreen" onClick={pushSignup}> S'INSCRIRE</button>
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
            </div>
            <div className="parrallax2"></div>
            <div className="signin">
                <form onSubmit={handleSubmit} className="formSingin">
                    <div className="form-email">
                        <label>Adresse Mail :</label>
                        <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-password">
                        <label>Mot de passe :</label>
                        <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-btn">
                        <button className="btnGreen" onClick={formSubmit}>CONNEXION</button>
                    </div>
                </form>
            </div>
            < Footer />
        </div >
    );
}

const mapDispatchToProps = { signinAction };
const mapStateToProps = (state) => ({
    signinStore: state.signin,
});
export default connect(mapStateToProps, mapDispatchToProps)(Signin);

