import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bandejaPaisaFondo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Andre's Paisa </h1>
        <p> THE BEST COLOMBIAN FOOD</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;