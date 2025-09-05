import React from 'react';
import ActiveLink from "../components/ActiveLink";


const Header = () => {
  return (
    <header>
        <div className="container nav-container">
          <div className="logo">Whisper of the <span>House</span></div>
          <nav>
            <ul>
            <li><ActiveLink href="/">Home</ActiveLink></li>
              <li><ActiveLink href="/guides">Guides</ActiveLink></li>
              <li><ActiveLink href="/collection">Collection</ActiveLink></li>
              <li><ActiveLink href="/abnormal-points-collection">Abnormal Points Collection</ActiveLink></li>
              <li><ActiveLink href="/download-and-news">Downloads & News</ActiveLink></li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;
