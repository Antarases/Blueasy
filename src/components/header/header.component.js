import React from 'react';
import './header.component.css';

const Header = () => (
    <header className="container-fluid">
        <div className="container-fluid top_nav">
            <div className="container">
                <a href="#" className="logo">
                    <img src={require("../../images/logo.png")} alt="Blueasy"/>
                </a>

                <span className="main-nav-trigger trigger-nav glyphicon glyphicon-menu-hamburger"></span>
                <nav className="trigger-victim">
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </nav>
            </div>
        </div>

        <div className="hero container">
            <h1>
                <span>&#8243;I&#8242;m looking for the unexpected.</span><br/>
                <span>I&#8242;m looking for things I&#8242;ve never seen before.&#8243;</span>
            </h1>
        </div>
    </header>  
);

export default Header;