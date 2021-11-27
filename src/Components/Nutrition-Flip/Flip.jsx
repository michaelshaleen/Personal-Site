import React, { useState, useEffect } from 'react';
import './Flip.css';

function Flip() {
  return (
    <>

<label>
    <input type="checkbox" />
    <div className="flip-card">
      <div className="front">
        <img src="Images/beach.jpg"/>
        <h1>Tyler Durden</h1>
        <h2>Second Name</h2>
        <b>More content</b>
        <p>click to flip</p>
      </div>
      <div className="back">
        <h1>About me</h1>
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
      
    </>
  )
}

export default Flip;
