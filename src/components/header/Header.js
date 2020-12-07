import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className="header" id="header">
        <div className="container">
          <div className="header__contents">
            <div className="header__brand">
              <a href="#header">
                <h2>DevL.</h2>
                <p>Web & Mobile developer</p>
              </a>
            </div>
            <div className="header__Link">
              <a
                href="https://drive.google.com/file/d/1qdb2M3oL0x_imbJVUvgJ4anMfXcPAvmn/view"
                target="_blank"
                rel="noreferrer"
              >
                <p>Resume</p>
              </a>
              <a href="#work">
                <p>Work</p>
              </a>
              <a href="#contact">
                <p>Contact</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header
