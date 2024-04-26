import React from 'react';
import { SiYoutubegaming } from "react-icons/si";
import SearchBar from './SearchBar.jsx';
import "../assets/styles/header.scss";

function Header() {
  return (
    <header className="epic-header">
      <div className="logo">
        <a href="/"><SiYoutubegaming className='logo__icon' /></a>
      </div>
      <div className='rater'>
        <a href="#">Rate Top Games</a>
      </div>
      <SearchBar/>
      <nav className="navigation">
        <ul>
          <li><a href="#">LOG IN</a></li>
          <li><a href="#">SIGN UP</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">...</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;