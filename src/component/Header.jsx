import React from 'react';
import '../customCss.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

const Header = () => {
    return (
        <div className="container bg-black txtc-white">
            <div className="row">
                <p className='title'>Portfolio</p>
                <ul className="navbar">
                    <li>
                        <Link to="/" className="link">HOME</Link>
                    </li>
                    <li>
                        <HashLink to="/#skill" smooth className="link">SKILL</HashLink>
                    </li>
                    <li>
                        <Link to="/project" className="link">PROJECT</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="link">BLOG</Link>
                    </li>
                    <li>
                        <HashLink to="/#contact" smooth className="link">CONTACT</HashLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;