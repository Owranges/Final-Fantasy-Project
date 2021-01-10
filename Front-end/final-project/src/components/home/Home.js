import React from "react";
import Header from "../header/Header"
import Footer from "../footer/Footer"
import "../../Greentheme.css"
import "./Home.css"
import ff7cloudprofile from "../../Img/HomeImg/ff7cloudprofile.png"
import ff7midgar from "../../Img/HomeImg/ff7midgar.jpg"

function Home() {
    return (
        <div>
            <Header />
            <div className="homeDiv" >
                <p className="homeMsg" >FINAL FANTASY VII REMAKE <br />FINAL FANTASY FORUM GUIDE <br /> Bienvenue à toi ! <br />Rejoins toi aussi notre forum en t’inscrivant pour profiter des actualités sur le jeu ainsi que de découvrir les subtilités de cet univers avec d’autres fans comme toi.</p>
                <img src={ff7midgar} className='midgarImg' alt='Logo meteor from ff7' />
                <img src={ff7cloudprofile} className='cloudImg' alt='Logo meteor from ff7' />
            </div>
            <Footer />
        </div >
    );
}

export default Home;
