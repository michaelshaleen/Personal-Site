import React from 'react'
import './Programming.css';
import Button from '../Button/Button';


function Programming() {
  return (
    <div className="programming-container">
    <label>
    <input type="checkbox" />
    <div className="flip-card">
      <div className="front">
        <img src="Images/beach.jpg"/>
        <h2>Programming</h2>
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
            Programming Connect
        </Button>
    
    
  </div>
  )
}

export default Programming
