import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer() {
  return (
    <div className={FooterCSS.footer}>
      <div className={FooterCSS.footerRow}>
       <div className=" my-auto mx-3">Follow us on:</div> 
        <i className="fa-brands fa-facebook my-auto mx-3 fa-2xl"></i>
        <i className="fa-brands fa-youtube my-auto mx-3 fa-2xl"></i>
        <i className="fa-brands fa-github my-auto mx-3 fa-2xl"></i>
      </div>
      <div  className=" my-auto mx-3">2045 all rights reserved</div>
    </div>
  );
}

export default Footer;
