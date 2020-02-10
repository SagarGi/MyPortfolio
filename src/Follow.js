import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container mt-3 text-center">
      <h3 className = "textpara mb-3">You can find me below:</h3>
      <div className = "social mb-2">
      <a
        href="https://www.facebook.com/sagar.gurung.357284" target="_blank"
        className="facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/sagar_gurung1001/?hl=en" target="_blank"
        className="instagram"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/sagar-gurung-99450619b/" target="_blank"
        className="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
      </a>

      <a
        href="https://github.com/SagarGi" target="_blank"
        className="Github"
      >
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      </div>
      
    </div>
  );
}
