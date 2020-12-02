import React from 'react'
import googleImage from '../../assets/country.jpg'
import * as Icon from "react-feather";
import './WorkCard.css'

const WorkCard = () => {
    return (
      <div className="workCard my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={googleImage} alt="" className="my-4" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div>
              <h3>
                <span>Google__</span>
                <br />

                <span>Clone</span>
              </h3>
              <div className="workCard__details -ml-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repellendus deserunt rem quo, magnam recusandae dolor minima odit iusto ipsum sapiente illo dolorem consequatur earum nobis magni voluptates accusantium! Hic?
                </p>
                        </div>
                        <hr />
              <div className="my-3">
                <Icon.ExternalLink className="mr-3" />
                <Icon.GitHub className="mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WorkCard
