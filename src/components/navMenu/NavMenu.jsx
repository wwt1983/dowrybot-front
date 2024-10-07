import React from 'react';
import './NavMenu.css';

const NavMenu = ({ isOpen }) => {
    return (
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
            <li><a href="/history">История раздач</a></li>
            <li><a href="/plan">Скоро в раздачах</a></li>
        </ul>
    );
};

export default NavMenu;