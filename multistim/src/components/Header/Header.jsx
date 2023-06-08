import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../../style/header.scss'
import Menu from './Menu';

const Header = () => {

    const [isOpen,setIsOpen]=useState(false);

    return (
        <header className='header'>
            <div className="container">
                <div className="header-container">
                    <Logo/>
                    <nav className='links'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/technology'>Technology</Link>
                        <Link className='link' to='/advantages'>Advantages</Link>
                        <Link className='link' to='/workflow'>Workflow</Link>
                        <Link className='link' to='/faq'>FAQ</Link>
                        <Link className='link' to='/service'>Service</Link>
                        <Link className='link' to='/device'>Device</Link>
                        <Link className='link' to='/about'>About</Link>
                    </nav>
                    <div className="req-demo req-header">
                        <Link to='/request' className='req-demo-btn header_btn'>Request a demo</Link>
                    </div>
                    <div className="open-icon" alt="open" 
                     onClick={()=>setIsOpen(true)}
                    >
                        <img src="/img/Menu/menu-open.svg" />
                    </div>
                    <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;