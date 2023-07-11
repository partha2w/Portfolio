import "./FormStyles.css";

import React from 'react'


const Form = () => {
  return (
    <div className="form">
      <form  action="https://formsubmit.co/ef5737f115e964a5c2a02d8636e38bc5" method="POST">
        <input name="name" type="text" placeholder="Enter Your Name"></input>
        <input name="email" type="email" placeholder="Enter Your Email"></input>
        <select name="subject">
          <option>--Select Your Subject--</option>
          <option>Hiring for a Company</option>
          <option>Wnated to build a Website</option>
          <option>Have a chat</option>
          <option>Other</option>
        </select>
        <textarea name="message" rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form
