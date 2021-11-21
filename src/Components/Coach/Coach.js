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
    <ArrowDropDownCircleIcon />
      
    <p className="intro">
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
    <div className="competition"></div>

      <div data-aos="fade-right" className="boxes" > 
        <h3
          className="coach-text">
          Credentials
        </h3>
      <ul className="text">
        <li>
          Olympic Weightlifting Level 2
          <DoneOutlineIcon />
        </li>
        <li>
          CrossFit Level 1 since 2017
          <DoneOutlineIcon />
        </li>
        <li>
        Personal Training since 2012
          <DoneOutlineIcon />
        </li>
      </ul>
    </div>
    <div data-aos="fade-right" className="boxes" > 
        <h3
          className="coach-text">
            Experience
        </h3>
      <ul className="text">
        <li>
        Weekend Warriors
          <DoneOutlineIcon />
        </li>
        <li>
          Fat Loss/ Muscle Gain
          <DoneOutlineIcon />
        </li>
        <li>
        Crawling is better than quitting
          <DoneOutlineIcon />
        </li>
      </ul>
    </div>
      <div className="nutrition-component">
      <Nutrition />
      </div>
      <div className="programming-component">
      <Programming />
      </div>
        <Footer />
  </>
  )
}

export default Coach;
