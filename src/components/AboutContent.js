import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import "react-icons"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>Who Am I?</h1>
        <p>
        Hello, I'm Parthajit Konwar, a Full Stack Developer with a year of experience building web applications using the MERN stack. My expertise includes HTML, CSS, JavaScript, React, MongoDB, Node.js, Express.js, and Bootstrap, and I'm always learning new technologies to improve my skills and stay up-to-date in the field.
        <br /><br />
        I have a passion for developing and creating innovative, appealing, and functional websites, and I love the challenge of bringing unique ideas to my projects. I'm a fast learner and always up for exploring new technologies to enhance my work.
        <br /><br />
        I take pride in delivering high-quality code and providing exceptional user experiences. My goal is to collaborate with others to build professional, functional, and visually stunning websites that meet the needs of clients and users alike. Let's connect and create something amazing together!
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="about-content">
        <h1 className="skill-heading">Skills</h1>
        <table className="skill-table">
          <tr>
            <td>HTML, CSS, Javascript</td>
            <td>⭐⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>React</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Node.js , Express.js</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>MongoDB, PostgreSQL</td>
            <td>⭐⭐⭐</td>
          </tr>
          <tr>
            <td>C, C++, Python</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Bootstrap</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Git</td>
            <td>⭐⭐⭐</td>
          </tr>
          <tr>
            <td>Problem-Solving</td>
            <td>⭐⭐⭐⭐</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

{/* <div className="img-container">
<div className="img-stack top">
    <img className="img" src={mern1} alt="mern"/>
</div>
<div className="img-stack bottom">
    <img className="img" src={mern2} alt="mern"/>
</div>
</div> */}

export default AboutContent
