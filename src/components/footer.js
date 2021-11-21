import React from "react";
import LINKEDIN from "../assets/images/footer/linkedin.png";
import GITHUB from "../assets/images/footer/github.png";

const Footer = () => {
  return (
    <div className="pt-5 pb-3 text-center footer">
      <div className="d-inline-block links">
        <a
          href="https://www.linkedin.com/in/shahrukh-qureshi-a735031b1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LINKEDIN} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/ShaleeQureshi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GITHUB} alt="GitHub" />
        </a>
        <p>Shahrukh Qureshi</p>
      </div>
      <div className="d-inline-block links">
        <a
          href="https://www.linkedin.com/in/zaiyan-azeem/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LINKEDIN} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/zaiyan-azeem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GITHUB} alt="GitHub" />
        </a>
        <p>Zaiyan Azeem</p>
      </div>
      <p className="text-center">© 2021</p>
    </div>
  );
};
export default Footer;
