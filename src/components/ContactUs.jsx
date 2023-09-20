import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <div className="contact_us">
        <center>
          <h1>Contact Us</h1>
          <button type="submit">View More</button>
        </center>
      </div>
      <center>
        <div className="social-handles">
          <div className="Mail">
            <h3>Mail</h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "black" }} />
              &nbsp;&nbsp;&nbsp; miess@iitr.ac.in
            </p>
          </div>

          <div className="Phone">
            <h3>Phone</h3>
            <p>
              <FontAwesomeIcon icon={faPhone} style={{ color: "black" }} />
              &nbsp;&nbsp;&nbsp; Lorem Ipsum : +91 12345 67890&nbsp;&nbsp;
            </p>
          </div>

          <div className="Social-Meadia">
            <h3>Social-Media</h3>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icons"
              style={{ color: "Black" }}
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icons"
              style={{ color: "Black" }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="social-icons"
              style={{ color: "Black" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icons"
              style={{ color: "Black" }}
            />
          </div>
        </div>
      </center>
      <footer>
        <center>
          <p>
            Copyrights 2023 | Team Mechanical and Industrial Engineering | All
            Rights Reserved{" "}
          </p>
        </center>
      </footer>
    </div>
  );
}

export default ContactUs;
