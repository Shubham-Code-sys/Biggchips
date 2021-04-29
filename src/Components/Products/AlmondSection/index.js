import React from 'react';
import './index.css';
// images
import almond from '../../../Assets/Images/almonds.jpg';

const AlmondSection = ()=>{
    return(
        <>
            <section class="products" id="almond">
                <div class="almonds-background"></div>
                <div class="almond-image">
                    <img src={almond} alt="almond" title="Almond"/>
                </div>
                <div class="almond-detail">
                    <h1>Roasted Almonds</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolore veritatis magnam veniam facere
                        nostrum, excepturi exercitationem sunt laboriosam! Delectus magnam facilis maxime exercitationem ut
                        velit tempore similique sequi laborum, beatae odit aut hic?</p>
                    <button class="order-btn">Order Now</button>
                </div>
            </section>
        </>
    )
}

export default AlmondSection;