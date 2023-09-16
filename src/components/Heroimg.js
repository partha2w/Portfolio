
import "./HeroimgStyles.css";
import React from 'react';
import HeroImg from "../assets/myimg2.png";
import { Link } from "react-router-dom";

const Heroimg = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="content">
                        <p>Hello, I'M PARTHAJIT</p>
                        <h1>Full-Stack Developer</h1>
                        <div>
                            <Link to="/project" className="btn">PROJECTS</Link>
                            <Link to="/contact" className="btn btn-light">CONTACT</Link>
                        </div>
                </div>
                <div className="content">
                    <img className="my-img" src={HeroImg} alt="myself" />
                </div>
            </div>
        </div>
    )
}

export default Heroimg
