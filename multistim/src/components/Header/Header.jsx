import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../../style/header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-container">
                    <Logo/>
                    <nav className='links'>
                        <Link to='/'>Home</Link>
                        <Link to='/technology'>Technology</Link>
                        <Link to='/advantages'>Advantages</Link>
                        <Link to='/workflow'>Workflow</Link>
                        <Link to='/faq'>FAQ</Link>
                        <Link to='/service'>Service</Link>
                        <Link to='/device'>Device</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                    <div className="req-demo">
                        <Link to='#' className='req-demo-btn header_btn'>Request a demo</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;