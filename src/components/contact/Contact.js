import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
      <div className="contactPage my-5">
        <div className="container">
          <h1>
            <span>I'm always</span>
            <br />
            <span>interested</span>
            <br />
            <span>about cool</span>
            <br />
            <span>stuffs.</span>
            <br />
            <span>Are you</span>
            <br />
            <span>minding a</span>
            <br />
            <span>Project?</span>
            <br />
            <a href="mailto:lamilekan263@gmail.com">
              <button className="mt-5">
                {" "}
                Let's Talk
                <img
                  className="ml-1 arrow"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzYiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCA3NiAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMTVIMzMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNNjYuMDEyNSAxMy43NUg1MVYxNi4yNUg2Ni4wMTI1VjIwTDcxIDE1TDY2LjAxMjUgMTBWMTMuNzVaIiBmaWxsPSJibGFjayIvPgo8Y2lyY2xlIGN4PSI0MS41IiBjeT0iMTQuNSIgcj0iMy41IiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
                  alt=""
                />
              </button>
            </a>
          </h1>
        </div>
        <div></div>
      </div>
    );
}

export default Contact
