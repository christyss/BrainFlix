import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Images/Logo/Logo-brainflix.svg';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <Link to={`/`} className="header__logo-link">
                <img className="header__logo" src={Logo} alt="BrainFlix Logo"/>
            </Link>
            <div className="header__search"><input className="header__search-bar" type="search" name="searchBar"  placeholder="Search" /></div>
            <div className="header__sub-container">
              <Link to={`/upload`}>
                <button className="header__sub-container-btn">UPLOAD</button>
              </Link>
              <img className="header__sub-container-user-icon" src={UserIcon} alt="Icon" />
            </div>
        </header>
    )
}

export default Header

