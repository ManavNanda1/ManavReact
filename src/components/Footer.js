import "./FooterStyles.css";

import React from 'react';

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div classname="footer-container"> 
       <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            <div>
                <p>404 Housing Society</p>
                <p>Jamnagar</p>
            </div>
        </div>
        <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>
         +91 8780160945
            </h4>
        </div>
        <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
         nandamanav7@gmail.com
            </h4>
        </div>
       </div>
       <div className="right"></div>
       <h4>About Me !!!</h4>
       <p>This is me Manav Nanda. CEO and Founder of Nothing.I enjoy discussing new projects and design challenges</p>
       <div className="social">
       <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}}/>
       <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}}/>
       <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
       </div>
      </div>
      </div>
  )
}

export default Footer
