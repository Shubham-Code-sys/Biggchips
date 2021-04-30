import React from 'react';
import './index.css';
// import Rellax from '../../../node_modules/rellax/rellax.min';
// images
import popcorn from '../../Assets/Images/popcorn.jpg';
import alomond from '../../Assets/Images/almonds.jpg';
import chips from '../../Assets/Images/chips.jpg';

const AllProducts = ()=>{
    // let rellax = new Rellax('.rellax');
    return(
        <>
            <section className="all-products" id="all-products">
                <h1>All Products</h1>
                <div className="all-products-images">
                    <div className="popcorn-image">
                        <img src={popcorn} alt="popcorn"/>
                        <p>POPCORN</p>
                        <a href="#popcorn">CHECKOUT</a>
                    </div>
                    <div className="almonds-image">
                        <img src={alomond} alt="almonds"/>
                        <p>ALMONDS</p>
                        <a href="#almond">CHECKOUT</a>
                    </div>
                    <div className="chips-image">
                        <img src={chips} alt="chips"/>
                        <p>CHIPS</p>
                        <a href="#chips">CHECKOUT</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllProducts;