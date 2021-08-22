import React from 'react';
import '../Header/Header.scss';
import Logo from '../../assets/Images/Logo/Logo-brainflix.svg';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <header className="header">
            <a className="header__logo-link"><img className="header__logo" src={Logo} alt="BrainFlix Logo"/></a>
            <div className="header__search"><input className="header__search-bar" type="search" name="searchBar"  placeholder="Search" /></div>
            <div className="header__sub-container">
              <button className="header__sub-container-btn">UPLOAD</button>
              <img className="header__sub-container-user-icon" src={UserIcon} alt="Icon" />
            </div>
        </header>
    )
}

export default Header

