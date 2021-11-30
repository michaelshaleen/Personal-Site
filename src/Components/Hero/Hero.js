import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

function Hero() {

  return(
    <>
      <div className="hero-container">
        <video src="/nature.mp4" 
          autoPlay loop muted 
          style={{width:"100%"}}/>
        <div className="motto">
          The finish line is halfway
        </div>
        <div className="hero-btns">
          <Button 
            className="btn" 
            buttonStyle="btn--outline"
            buttonSize="btn--large" >
              Connect
          </Button>
        </div>
      </div>
    </>
  )
}

export default Hero;
