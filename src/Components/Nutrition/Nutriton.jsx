import React from 'react'
import './Nutrition.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from '../Button/Button';


function Nutrition() {
  return (
    <div className="nutrition-container">
          <div 
            data-aos="flip-up"
            className="boxes">
            Nutrition
          </div> 


      <p>
          We've heard it before, it's why you're here reading me.
          Abs are made in the kitchen. You can't out 
          train a bad diet. Smoothie this, radical cleanse
          that. All you need is this one super food. 
          Stop. We both know, we know, it's not true at all is it?
          The truth is proper nutrition is simple, but not
          necessarily <span className="easy">easy. </span>
          Bottom line is we have coached Performance Athletes
          , soccer moms, Senior Citizens, 

          <p>Currently we're operating on an individual
            basis(meaining you get your own coach) so
            no templates or apps at the moment!
            We work with you by assessing baseline, goals,
            timelines, and dynamically working on a nutrition
            plan. 
          </p>
      </p>
      <Button 
          className="btn" 
          buttonStyle="btn--outline"
          buttonSize="btn--large" >
            Connect
        </Button>
    </div>
  )
}

export default Nutrition;
