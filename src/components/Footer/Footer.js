import "./Footer.css";

import * as React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer-oa">
      <div className="contact-card">
        <h3>Contact Me</h3>
        <p>11C Republicii Street, Apahida, Cluj</p>
        <p>
          Email:{" "}
          <a href="mailto:ormenisanandrei0102@gmail.com">
            ormenisanandrei0102@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+40751259269">+40 751 259 269</a>
        </p>
      </div>
      <div className="social-card">
        <h3>Follow Me</h3>
        <div className="social-icons">
          <a
            href="https://github.com/AndreiOrmeisan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <GitHub fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/ormenisan-andrei-a9524516a/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <LinkedIn fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
}
