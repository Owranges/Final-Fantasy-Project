import React, { useState } from 'react';
import "./Signup.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            < Header />
            <div className="signup">
                <p className="signupMsg">Vous ne possédez pas encore de compte</p>
                <button className="btnGreen"> S'INSCRIRE</button>
                <form onSubmit={handleSubmit}>
                    <div className="form-email">
                        <label>Adresse Mail:</label>
                        <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-password">
                        <label>Mot de passe:</label>
                        <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-pseudo">
                        <label>Mot de passe:</label>
                        <input type="pseudo" name="pseudo" id="pseudo" required onChange={e => setPseudo(e.target.value)} />
                    </div>
                    <div className="form-firstname">
                        <label>Mot de passe:</label>
                        <input type="firstname" name="firstname" id="firstname" required onChange={e => setFirstname(e.target.value)} />
                    </div>
                    <div className="form-avatar">
                        <label>Mot de passe:</label>
                        <input type="avatar" name="avatar" id="avatar" required onChange={e => setAvatar(e.target.value)} />
                    </div>
                </form>
                <div className="form-btn">
                    <button className="btnGreen">CONNEXION</button>
                </div>
            </div>
            < Footer />
        </div>
    );
}

export default Signup;
