import React from 'react';
import './index.css';
// import Rellax from '../../../../node_modules/rellax/rellax.min';
// images
import chips from '../../../Assets/Images/chips.jpg';

const ChipsSection = ()=>{
    // let rellax = new Rellax('.rellax');
    return(
        <>
            <section className="products" id="chips">
                <div className="chips-background"></div>
                <div className="product-detail">
                    <h1>Chips</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolore veritatis magnam veniam facere
                        nostrum, excepturi exercitationem sunt laboriosam! Delectus magnam facilis maxime exercitationem ut
                        velit tempore similique sequi laborum, beatae odit aut hic?</p>
                    <button className="order-btn">Order Now</button>
                </div>
                <div className="product-image">
                    <img src={chips} alt="chips"/>
                </div>
            </section>
        </>
    )
}
export default ChipsSection;