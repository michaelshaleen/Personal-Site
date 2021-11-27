import React, { useState, useEffect } from 'react';
import './Nutrition.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from '../Button/Button';
// import Flip from '../Nutrition-Flip/Flip';


function Nutrition() {  
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);


  return (<>
  <div className="nutrition-container">
  <label>
    <input type="checkbox" />
    <div className="flip-card">
      <div className="front">
        <img src="Images/beach.jpg"/>
        <h2>Nutrition Coaching</h2>
        <p>click to flip</p>
      </div>
      <div className="back">
        <h1>How We Help</h1>
        <hr/>
        <p> We've heard it before, it's why you're here reading me.
          Abs are made in the kitchen. You can't out 
          train a bad diet. Smoothie this, radical cleanse
          that. All you need is this one super food. 
          Stop. We both know, we know, it's not true at all is it?
          The truth is proper nutrition is simple, but not
          necessarily <span className="easy">easy. </span>
          Bottom line is we have coached Performance Athletes
          , soccer moms, Senior Citizens, 
        </p>
        <p className="click">click to flip</p>
      </div>
    </div>
  </label>
  <Button 
          className="btn" 
          buttonStyle="btn--outline"
          buttonSize="btn--large" >
            Nutrition Connect
        </Button>
    
    
  </div>
  
        

 </> )
}

export default Nutrition;
