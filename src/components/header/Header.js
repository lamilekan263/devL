import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className="header">
        <div className="container">
          <div className="header__contents">
            <div className="header__brand">
              <h2>DevL.</h2>
              <p>Web & Mobile developer</p>
            </div>
            <div className="header__Link">
              <p>Resume</p>
              <p>Work</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header
