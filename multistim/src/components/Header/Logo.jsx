import React from 'react';
import '../../style/logo.scss'


const Logo = () => {
    return (
        <div className='logo-container'>
            <div className="logo-img">
                <img src="/img/Logo/multistim-logo.svg" alt="logo" />
            </div>
            <div className="logo-text">Multistim</div>
        </div>
    );
};

export default Logo;