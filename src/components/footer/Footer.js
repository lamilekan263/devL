import React from 'react'

const Footer = () => {
    return (
      <div className="footer my-5">
        <div className="container">
          <div className="footer__data d-flex flex-sm-column justify-content-between">
            <div>© Olalekan Ibrahim 2020</div>
            <div className="links">
              <a href="https://github.com/lamilekan263" className="mr-1">
                Github
              </a>
              <a href="https://twitter.com/_horla_braheem" className="mr-1">
                Twitter
              </a>
              <a href="https://linkedin.com/in/jimoh-ibrahim" className="mr-1">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
