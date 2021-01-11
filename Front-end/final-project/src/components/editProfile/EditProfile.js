import React, { useState } from 'react';
import axios from "axios"
import "./EditProfile.css"
import ff7SwordBuster from "../../Img/EditProfileImg/ff7swordbuster.png"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function EditProfile(props) {

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
        axios.post("http://localhost:8000//user/edit/:id", formValues)
            .then(response => {
                if (response.data === "This email is already in use") {
                    setIncorrect(false)
                }
                else if (response.data.auth) {

                    // props.history.push("/");
                }
            }).catch(err => {
                console.log(err);
            })
    }

    // const pushSignin = () => {
    //     props.history.push("/sign-in")
    // }
    return (
        <div >
            < Header />
            <div className="editProfileDiv" >
                <div className="editProfile">
                    <p className="editProfileMsg">Vous pouvez modifier les informations de profil</p>
                </div>
                <div className="editProfile">
                    <form onSubmit={handleSubmit} className="formEditProfile">
                        <div className="form-email">
                            <label>Adresse Mail:</label>
                            <input type="email" name="email" id="email" required onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-password">
                            <label>Mot de passe:</label>
                            <input type="password" name="password" id="password" required onChange={e => setPassword(e.target.value)} />
                        </div>
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
                    </form>
                    <div className="form-btn">
                        <button className="btnGreen" onClick={formSubmit}>VALIDER   </button>
                    </div>
                </div>
            </div>
            < Footer />

        </div >
    );
}

export default EditProfile;
