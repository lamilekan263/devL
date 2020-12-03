import React, { useEffect } from 'react'
import * as Icon from "react-feather";
import AOS from 'aos'





import country from "../../assets/country.jpg";
import google from "../../assets/google.jpg";
import netflix from "../../assets/netflix.jpg";
import youtube from "../../assets/youtube.jpg";
import newstoday from "../../assets/newstoday.jpg"


import './Projects.css'

const Works = () => {
  useEffect(() => {
    AOS.init({duration : 3000})
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
              <img src={google} alt="" className="image my-4 sm-w-100" />
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
                  <div>React, Google Custom API</div>
                  <div className="my-3">
                    <a
                      href="https://google-clone-tau.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.ExternalLink className="iconStyle mr-3" />
                    </a>
                    <a
                      href="https://netflix-clone-puce.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.GitHub className="iconStyle mr-3" />
                    </a>
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
              <img src={country} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Country__</span>
                  <br />

                  <span>App</span>
                </h3>
                <div className="project__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta repellendus deserunt rem quo, magnam recusandae dolor
                    minima odit iusto ipsum sapiente illo dolorem consequatur
                    earum nobis magni voluptates accusantium! Hic?
                  </p>
                  <div className="line my-3 my-md-2"></div>
                  <div>React, Rest API, TailwinCss</div>
                  <div className="my-3">
                    <a
                      href="https://countries-theta.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.ExternalLink className="iconStyle mr-3" />
                    </a>
                    <a
                      href="https://netflix-clone-puce.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.GitHub className="iconStyle mr-3" />
                    </a>
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
              <img src={youtube} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Youtube__</span>
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
                  <div>React, Rest API, Semantic UI </div>
                  <div className="my-3">
                    <a
                      href="https://my-youtube-clone.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.ExternalLink className="iconStyle mr-3" />
                    </a>
                    <a
                      href="https://netflix-clone-puce.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.GitHub className="iconStyle mr-3" />
                    </a>
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
              <img src={newstoday} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>News__</span>
                  <br />

                  <span>Today</span>
                </h3>
                <div className="project__desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta repellendus deserunt rem quo, magnam recusandae dolor
                    minima odit iusto ipsum sapiente illo dolorem consequatur
                    earum nobis magni voluptates accusantium! Hic?
                  </p>
                  <div className="line my-3 my-md-2"></div>
                  <div>React, GNews API, Chakra UI</div>
                  <div className="my-3">
                    <a
                      href="https://news-app-tau.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.ExternalLink className="iconStyle mr-3" />
                    </a>
                    <a
                      href="https://netflix-clone-puce.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.GitHub className="iconStyle mr-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ends here */}
          <div
            className="d-flex flex-column flex-md-row mr-auto max-fit projectCard  "
            data-aos="fade-right"
          >
            <div className=" align-self-center ">
              <img src={netflix} alt="" className="image my-4" />
            </div>
            <div className=" py-md-5 project__details ">
              <div>
                <h3>
                  <span>Netflix__</span>
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
                  <div>React. RestAPI</div>
                  <div className="my-3">
                    <a
                      href="https://netflix-clone-puce.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.ExternalLink className="iconStyle mr-3" />
                    </a>
                    <a
                      href="https://netflix-clone-puce.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon.GitHub className="iconStyle mr-3" />
                    </a>
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