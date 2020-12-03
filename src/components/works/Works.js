import React, { useEffect } from 'react'
import AOS from 'aos'
import googleImage from "../../assets/country.jpg";

import * as Icon from "react-feather";
import './Works.css'

const Works = () => {
  useEffect(() => {
    AOS.init({duration : 2000})
  }, [])
    return (
      <div className="project">
        <div className="container">
          <h1>
            <span>Selected_</span>
            <br />
            <span>Works:</span>
          </h1>
          {/* card component */}
          {/* first card */}
          <div
            className="d-flex flex-column flex-md-row mr-auto max-fit projectCard  "
            data-aos="fade-right"
          >
            <div className=" align-self-center w-100">
              <img src={googleImage} alt="" className="image my-4 sm-w-100" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Google__</span>
                  <br />

                  <span>Clone</span>
                </h3>
                <div className="project__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta repellendus deserunt rem quo, magnam recusandae dolor
                    minima odit iusto ipsum sapiente illo dolorem consequatur
                    earum nobis magni voluptates accusantium! Hic?
                  </p>
                  <div className="line my-3 my-md-2"></div>
                  <div>React, firebase, MongoDb</div>
                  <div className="my-3">
                    <Icon.ExternalLink className="iconStyle mr-3" />
                    <Icon.GitHub className="iconStyle mr-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* first card ends here */}
          <div
            className="d-flex flex-column flex-md-row-reverse ml-auto max-fit projectCard "
            data-aos="fade-left"
          >
            <div className=" align-self-center ">
              <img src={googleImage} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Google__</span>
                  <br />

                  <span>Clone</span>
                </h3>
                <div className="project__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta repellendus deserunt rem quo, magnam recusandae dolor
                    minima odit iusto ipsum sapiente illo dolorem consequatur
                    earum nobis magni voluptates accusantium! Hic?
                  </p>
                  <div className="line my-3 my-md-2"></div>
                  <div>React, firebase, MongoDb</div>
                  <div className="my-3">
                    <Icon.ExternalLink className="iconStyle mr-3" />
                    <Icon.GitHub className="iconStyle mr-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second card ends here */}
          <div
            className="d-flex flex-column flex-md-row mr-auto max-fit projectCard  "
            data-aos="fade-right"
          >
            <div className=" align-self-center ">
              <img src={googleImage} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Google__</span>
                  <br />

                  <span>Clone</span>
                </h3>
                <div className="project__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta repellendus deserunt rem quo, magnam recusandae dolor
                    minima odit iusto ipsum sapiente illo dolorem consequatur
                    earum nobis magni voluptates accusantium! Hic?
                  </p>
                  <div className="line my-3 my-md-2"></div>
                  <div>React, firebase, MongoDb</div>
                  <div className="my-3">
                    <Icon.ExternalLink className="iconStyle mr-3" />
                    <Icon.GitHub className="iconStyle mr-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* first card ends here */}
          <div
            className="d-flex flex-column flex-md-row-reverse ml-auto max-fit projectCard "
            data-aos="fade-left"
          >
            <div className=" align-self-center ">
              <img src={googleImage} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Google__</span>
                  <br />

                  <span>Clone</span>
                </h3>
                <div className="project__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta repellendus deserunt rem quo, magnam recusandae dolor
                    minima odit iusto ipsum sapiente illo dolorem consequatur
                    earum nobis magni voluptates accusantium! Hic?
                  </p>
                  <div className="line my-3 my-md-2"></div>
                  <div>React, firebase, MongoDb</div>
                  <div className="my-3">
                    <Icon.ExternalLink className="iconStyle mr-3" />
                    <Icon.GitHub className="iconStyle mr-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ends here */}
        </div>
      </div>
    );
}

export default Works
