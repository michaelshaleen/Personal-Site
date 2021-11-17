import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import './Software.css';
import Button from '../Button/Button';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Footer from '../Footer/Footer';


function Software() {
  useEffect(() => {
    Aos.init({duration: 500 });
  }, [])

  const gitHub = () => {
    window.open("https://github.com/michaelshaleen")
  }

  return (<>
  <div className="softwareParallax"></div>

    <p className="intro">
          <ul>
            <li>React Js + Ajax/Redux</li>
            <li>Express Js</li>
            <li>CSS/SASS</li>
            <li>jQuery</li>
            <li>AWS</li>
            <li>Node Js</li>
            <li>SQL</li>
            <li>Git/GitHub</li>
          </ul>
        </p> 
  <div className="softwareParallax"></div>
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


  {/* 
  <div data-aos="fade-right" className="boxes" > 
        <h3
          className="text">
          Confident with:
        </h3>
      <ul className="text">
        <li>
          JavaScript with React/Redux
          <DoneOutlineIcon />
        </
    </div>
        <ul
        className="text">
              <p>I've played with:</p>
              <li>
                Java
                <DoneOutlineIcon />
              </li>
              <li>
                Python
                <DoneOutlineIcon />
              </li>
      </ul>
      <div className="softwareParallax">
        <div className="grids">
        <div data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="8000">
      </div>
      <div data-aos="zoom-in-up" className="boxes" style={{color: "white", textAlign: "center"}}>
        <a 
          className="text" 
          href="hire"
          onClick={gitHub}>
            My GitHub
        </a>
      </div>
    </div>
        <div className="softwareParallax"></div>
    <div data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="8000">
      </div>
      <div className="softwareParallax"></div>
    </div> */}

    <Footer />
  </>)
}

export default Software;
