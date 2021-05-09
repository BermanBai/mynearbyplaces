import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            &copy; Copyright {new Date().getFullYear()}, All right
        </div>
    );
}

export default Footer;
