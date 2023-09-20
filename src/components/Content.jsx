import React from 'react';
import circle_logo from "../images/MIESS Logo.png";
import Map from "../images/Map.png"
import "./content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';


function Content() {
  return (
    <>
      <div className='content'>
        <div className='header'>
          <center>
            <div className='circle'><img src={circle_logo}></img></div>
          </center>
          <Header />
        </div>
        <div className='display'>
        <div className='form'>
          <h1><strong>Contact Us</strong></h1>
          <p>Reach us for any queries or doubts you might have</p>
          <form>
            <label>
              <input type="text" name="name" placeholder='Name' />
            </label>
            <label>
              <input type="text" name="adress" placeholder='Address' />
            </label>
            
              <textarea className='msg' type="text" name="message" placeholder='Message' />
            
            <button>Send Meassage</button>
          </form>
        </div>

        <div className='map'>
          <img src={Map}></img>
          <div>
          <center>
            <FontAwesomeIcon icon={faEnvelope}  className='contact-icons' style={{ color: "aliceblue" }} />
            <FontAwesomeIcon icon={faLinkedin}  className='contact-icons' style={{ color: "aliceblue" }} />
            <FontAwesomeIcon icon={faFacebook}  className='contact-icons' style={{ color: "aliceblue" }} />
            <FontAwesomeIcon icon={faTwitter}   className='contact-icons' style={{ color: "aliceblue" }} />
            <FontAwesomeIcon icon={faInstagram} className='contact-icons' style={{ color: "aliceblue" }} />
          </center>
          </div>
        </div>
        </div>

        <footer>
          <center>
            <p style={{color:"white"}}>Copyrights 2023 | Team Mechanical and Industrial Engineering | All Rights Reserved </p>
          </center>
        </footer>
      </div>
    </>
  )
}

export default Content