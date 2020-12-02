import React from 'react'
import WorkCard from '../worksCard/WorkCard';
import './Works.css'

const Works = () => {
    return (
      <div className="works">
        <div className="container">
          <h1>
            <span>Selected_</span>
            <br />
            <span>Works:</span>
          </h1>
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <div></div>
        </div>
      </div>
    );
}

export default Works
