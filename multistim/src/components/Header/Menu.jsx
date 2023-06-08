import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../../style/menu.scss'



const Menu = ({isOpen,onChange}) => {
    
    const items = [
        {itemText:"Home", itemLink:'/'},
        {itemText:"Technology", itemLink:'/technology'},
        {itemText:"Advantages", itemLink:'/advantages'},
        {itemText:"Workflow", itemLink:'/workflow'},
        {itemText:"FAQ", itemLink:'/faq'},
        {itemText:"Service", itemLink:'/service'},
        {itemText:"Device", itemLink:'/device'},
        {itemText:"About", itemLink:'/about'}
    ];

    return (
        <div className={`menu-burger-wrapper ${isOpen && "open"}`}>
            <div className="menu-burger">
                <div className='logo-container menu-logo'>
                    <div className="logo-img menu-img">
                        <img src="/img/Menu/logo-small.svg" alt="logo" />
                    </div>
                    <div className="logo-text menu-text">Multistim</div>
                </div>
                <div className="close-icon" >
                    <img src="/img/Menu/menu-close.svg" alt="close"
                    onClick={()=> onChange(false)}
                    />
                </div>
            </div>
            <div className="menu-burger-links">
                {items.map((item,index)=> <Link className='link-menu' 
                to = {item.itemLink} key={index}>{item.itemText}</Link> )}
            </div>
            <div className="req-demo">
                <Link to='/request' className='req-demo-btn header_btn'>Request a demo</Link>
            </div>
        </div>
    );
};

export default Menu;