import React from 'react';
import footer from '../../assets/images/footer.png';

let currentTime = new Date();

const Footer = () => {
    const footerStyle = {
        background: `url(${footer}) no-repeat center`,
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
    }
    return (
        <footer style={footerStyle} className="p-10">
            <div className="footer grid-cols-2 md:grid-cols-3 justify-items-center items-center">
                <div>
                    <span className="footer-title">Services</span> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="pt-10 text-center">
                <p>Copyright © {currentTime.getFullYear()} - All right reserved</p>
            </div>
</footer>
    );
};

export default Footer;