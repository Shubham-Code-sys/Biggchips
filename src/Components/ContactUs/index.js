import React from 'react';
import './index.css';

const ContactUs = ()=>{
    return(
        <>
            <section class="contact-us" id="contact-us">
                <div class="contact-us-div">
                    <h1>Contact Us</h1>
                    <p>Feel free to contact and feedback related to your experience with <span class="logo">Biggchips</span></p>
                    <form action="">
                        <input type="text" name="" placeholder="Your Name"/>
                        <input type="text" name="" placeholder="Your Email"/>
                        <textarea name="" class="feedback" rows="5" placeholder="Your Message"></textarea>
                        <button class="form-btn">SEND</button>
                    </form>
                </div>
                <div class="horizontal-line"></div>
                <div class="address-div">
                    <h1>Address</h1>
                    <p>Office: XYZ/30 B-Block<br/>
                        Email: example@xyz.com<br/>
                        Mobile: 0123456789</p>
                </div>
            </section>
        </>
    )
}
export default ContactUs;