import React from 'react';
import './index.css';
// images
import popcorn from "../../../Assets/Images/popcorn.jpg";

const PopcornSection = ()=>{
    return(
        <>
            <section className="products" id="popcorn">
                <div className="product-detail">
                    <h1>Popcorn</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolore veritatis magnam veniam facere
                        nostrum, excepturi exercitationem sunt laboriosam! Delectus magnam facilis maxime exercitationem ut
                        velit tempore similique sequi laborum, beatae odit aut hic?</p>
                    <button className="order-btn">Order Now</button>
                </div>
                <div className="product-image">
                    <img src={popcorn} alt="popcorn" title="Popcorn"/>
                </div>
            </section>
        </>
    )
}
export default PopcornSection;