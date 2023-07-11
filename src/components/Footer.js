import "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Digboi, Assam.</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            parthajitkonwar15@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About This Site</h4>
                    <p>Welcome to my portfolio website! This site showcases some of the projects I've built using the MERN stack, as well as my skills and experience as a full stack developer. I built this site using React and deployed it using GitHub Pages, with a focus on creating a clean and functional user experience. I hope you find it informative and inspiring, and I look forward to connecting with you!</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/parthajit-konwar-00a424245" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://instagram.com/parthajit202" target="_blank" rel="noreferrer">
                            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.facebook.com/parthajit.konwar.9" target="_blank" rel="noreferrer">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
