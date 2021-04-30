import React from 'react';
import './index.css';

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <>
            <footer class="footer-section">
                {/* <nav>
                    <div class="logo">Biggchips</div>
                    <ul class="navbar">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#all-products">Products</a></li>
                        <li><a href="#">Your Orders</a></li>
                        <li><a href="#contact-us">Contact us</a></li>
                    </ul>
                </nav>
                <div class="footer-divider"></div> */}
                <p id="copyright">All ©Copyright Reserved {currentYear}</p>
            </footer>
        </>
    )
}
export default Footer;