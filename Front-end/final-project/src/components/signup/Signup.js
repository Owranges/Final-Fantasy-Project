import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import axios from "axios"
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
import axios from "axios"
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
import "./Signup.css"
import Header from "../../Global/header/Header"
import Footer from "../../Global/footer/Footer"

<<<<<<< HEAD
<<<<<<< HEAD
function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
=======
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
function Signup(props) {

    const [incorrect, setIncorrect] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [firstname, setFirstname] = useState('')
    const [avatar, setAvatar] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const formSubmit = () => {
        const formValues = {
            email: email,
            password: password,
            pseudo: pseudo,
            prenom: firstname,
            avatar: avatar,
        }
        axios.post("http://localhost:8000/user/sign-up", formValues)
            .then(response => {
                if (response.data === "This email is already in use") {
                    setIncorrect(false)
                }
                else if (response.data.auth) {
                    props.history.push("/sign-in");
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const pushSignin = () => {
        props.history.push("/sign-in")
    }
<<<<<<< HEAD
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
    return (
        <div>
            < Header />
            <div className="signup">
<<<<<<< HEAD
<<<<<<< HEAD
                <p className="signupMsg">Vous ne possédez pas encore de compte</p>
                <button className="btnGreen"> S'INSCRIRE</button>
                <form onSubmit={handleSubmit}>
=======
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
                <p className="signupMsg">Vous possédez déjà compte</p>
                <button className="btnGreen" onClick={pushSignin}> CONNEXION</button>
            </div>
            <div className="parrallax2"></div>
            <div className="signup">
                <form onSubmit={handleSubmit} className="formSignup">
<<<<<<< HEAD
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
                    <div className="form-email">
                        <label>Adresse Mail:</label>
                        <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-password">
                        <label>Mot de passe:</label>
                        <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
                </form>
                <div className="form-btn">
                    <button className="btnGreen">CONNEXION</button>
                </div>
            </div>
            < Footer />
        </div>
=======
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
                    <div className="form-pseudo">
                        <label>Pseudo:</label>
                        <input type="pseudo" name="pseudo" id="pseudo" required onChange={e => setPseudo(e.target.value)} />
                    </div>
                    <div className="form-firstname">
                        <label>Prénom:</label>
                        <input type="firstname" name="firstname" id="firstname" required onChange={e => setFirstname(e.target.value)} />
                    </div>
                    <div className="form-avatar">
                        <label>Image de profil:</label>
                        <input type="avatar" name="avatar" id="avatar" required onChange={e => setAvatar(e.target.value)} />
                    </div>
                    <div className="form-btn">
                        <button className="btnGreen" onClick={formSubmit}>INSCRIPTION</button>
                    </div>
                </form>
            </div>
            < Footer />
        </div >
<<<<<<< HEAD
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
    );
}

export default Signup;
