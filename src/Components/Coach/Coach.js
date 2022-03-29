import React, { useState, useEffect } from 'react';
import './Coach.css';
import Footer from '../Footer/Footer';
import Programming from '../Programming/Programming';
import Nutrition from '../Nutrition/Nutriton';

import { Link } from 'react-router-dom';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Aos from 'aos';
import "aos/dist/aos.css";
{/* <link rel="stylesheet"  
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" 
  integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" 
  crossorigin="anonymous">
</link> */}

function Coach() {
  useEffect(() => {
    Aos.init({duration: 1000 });
  }, [])

  return (<>
    <div className="beach"></div>
    <div className="beach">

    <div className="p-container">
      <p className="intro"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">
          Since 2012 I've been supporting people
          to reach and MAINTAIN their health and fitness
          goals. From Marine Corps entry preparation
          to CrossFit performance I've been successful
          as a coach and I'm happy to say it's been
          the most natural thing I've ever done. 
          Recently I've been focusing on helping 
          individuals reach their body composition
          goals through dynamic coaching in their
          nutrition, workout programming, recovery,
          and most importantly, keeping this consistent
          after their goals are met.
        </p>   
      </div>  
            </div>
      {/* parallax */}
    <div className="competition"></div>
    <div className="p-container">
      <div data-aos="fade-right" className="boxes" > 
        <h3>
          Credentials
        </h3>
      <ul>
        <li className="list">
          Olympic Weightlifting Level 2
          <DoneOutlineIcon />
        </li>
        <li className="list">
          CrossFit Level 1 since 2017
          <DoneOutlineIcon />
        </li>
            
        <li className="list">
        Personal Training since 2012
          <DoneOutlineIcon />
        </li>
      </ul>
    </div>
    <div data-aos="fade-left" className="boxes" > 
        <h3
          className="coach-text">
            Experience
        </h3>
      <ul>
        <li className="list">
        Weekend Warriors
          <DoneOutlineIcon />
        </li>
        <li className="list">
          Fat Loss/ Muscle Gain
          <DoneOutlineIcon />
        </li>
        <li className="list">
        Crawling is better than quitting
          <DoneOutlineIcon />
        </li>
      </ul>
    </div>
            </div>
      <div className="nutrition-component">
      <Nutrition />
      </div>
        <Footer />
  </>
  )
}

export default Coach;
