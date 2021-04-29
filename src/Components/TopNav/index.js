import React from 'react';
import './index.css';

const TopNav = ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">Biggchips</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
              </ul>
            </div>
        </nav>
        </>
    )
}

export default TopNav;