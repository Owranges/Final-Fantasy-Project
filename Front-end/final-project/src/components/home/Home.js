import React from "react";
<<<<<<< HEAD
import Header from "../header/Header"
import Footer from "../footer/Footer"
<<<<<<< HEAD
import "./Home.css"

function Home() {
    return (
        <div>
            <Header />
            <div className="homeDiv">hi</div>
=======
import "../../Greentheme.css"
=======
import Header from "../../Global/header/Header"
import Footer from "../../Global/footer/Footer"
import "../../themeColor/Greentheme.css"
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
import "./Home.css"
import ff7cloudprofile from "../../Img/HomeImg/ff7cloudprofile.png"
import ff7midgar from "../../Img/HomeImg/ff7midgar.jpg"

function Home() {
    return (
        <div className="homes">
            <Header />
            <div className="homeDiv" >
                <div className="homeMsgDiv">
                    <p className="homeMsg" >FINAL FANTASY VII REMAKE <br />FINAL FANTASY FORUM GUIDE <br /> Bienvenue à toi ! <br />Rejoins toi aussi notre forum en t’inscrivant pour profiter des actualités sur le jeu ainsi que de découvrir les subtilités de cet univers avec d’autres fans comme toi.</p>
                </div>
                <img src={ff7midgar} className='midgarImg' alt='Logo meteor from ff7' />
                <img src={ff7cloudprofile} className='cloudImg' alt='Logo meteor from ff7' />
            </div>
<<<<<<< HEAD
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
            <Footer />
        </div >
    );
}

export default Home;
