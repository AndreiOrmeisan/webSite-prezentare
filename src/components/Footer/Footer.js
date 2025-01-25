import "./Footer.css";

import * as React from "react";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="footer-oa">
      <div className="card-oa">
        <h3 className="text-oa">Contact Me</h3>
        <p className="text-oa"> 11C Republicii Street, Apahida, Cluj</p>
        <p className="text-oa"> Email: ormenisanandrei0102@gmail.com</p>
        <p className="text-oa"> Phone: +40 751 259 269</p>
      </div>
      <div className="card-oa">
        <h3 className="text-oa">Follow Me</h3>
        <a href="https://github.com/AndreiOrmeisan">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/ormenisan-andrei-a9524516a/"
          color="inherit"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}
