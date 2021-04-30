import React from 'react';
import './index.css';
// images
import facebook from '../../Assets/Images/facebook.png';
import twitter from '../../Assets/Images/twitter.png';
import instagram from '../../Assets/Images/instagram.png';
import workingUser from '../../Assets/Images/aboutUs.jpg';

const AboutUs = ()=>{
    return(
        <>
            <section className="about-us" id="about-us">
                <h1>About Us</h1>
                <div className="about-us-div">
                    <div className="left-div">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum dolorum obcaecati temporibus ducimus! Similique modi voluptatum magni consectetur quidem praesentium vero ab? Possimus adipisci, odio
                            culpa ipsam neque molestias eius incidunt accusantium quibusdam tenetur?</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="facebook" title="follow"/></a>
                            <a href="https://www.twitter.com" target="_blank"><img src={twitter} alt="twitter" title="follow"/></a>
                            <a href="https://www.instagram.com" target="_blank"><img src={instagram} alt="instagram" title="follow"/></a>
                        </div>
                    </div>
                    <div className="right-div">
                        <img src={workingUser} alt="about us-image"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;