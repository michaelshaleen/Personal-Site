import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import './Software.css';
import Button from '../Button/Button';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Footer from '../Footer/Footer';
import GitHubIcon from '@material-ui/icons/GitHub';




//main function
function Software() {
  useEffect(() => {
    Aos.init({duration: 500 });
  }, [])

  const gitHub = () => {
    window.open("https://github.com/michaelshaleen")
  }
 
  return (<>
  <div className="softwareParallax"></div>
  <div className="boxes" > 
        <h1>
          I Love Using:
        </h1>
      <ul className="text">
        <li data-aos="flip-up">
        React Js + Ajax/Redux
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        Express Js
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        Material UI
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        CSS/SASS
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        Git/GitHub
          <DoneOutlineIcon />
        </li> 
        <li data-aos="flip-up">
        jQuery
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        Node Js
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        AWS
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        SQL
          <DoneOutlineIcon />
        </li>
        <li data-aos="flip-up">
        Docker
          <DoneOutlineIcon />
        </li>
      </ul>
    </div>
    <div className="boxes" > 
        <h1>
            Currently Learning
        </h1>
      <ul className="text">
        <li data-aos="flip-up">
        Python
        </li>
        <li data-aos="flip-up">
          React Native
        </li>
      </ul>
      <div className="checkout"><u>
        Check out my Github
      </u>
      </div>
        <GitHubIcon
          className="github-icon"
          style={{ fontSize: 40 }}
          onClick={gitHub}/>
      <div className="softwareParallax"></div>


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

  {/* <div className="tech-footer">

</div> */}
<Footer />
</div>
  </>)
}

export default Software;
