import React, { useEffect } from 'react';
import './Massage.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from '../Button/Button';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Footer from '../Footer/Footer';


function Massage() {

  useEffect(() => {
    Aos.init({duration: 1000 });
  }, [])


  return (<>
  <div className="massageParallax"></div>
  <div className="boxes" > 
        <h1>
          Modalities:
        </h1>
      <ul className="text">
        <li data-aos="flip-up">
        Deep Tissue
        </li>
        <li data-aos="flip-up">
        Myofascial Release
        </li>
        <li data-aos="flip-up">
        Hot Stones
        </li>
        <li data-aos="flip-up">
        Cranial Sacral
        </li> 
        <li data-aos="flip-up">
        Reflexology
        </li>
        <li data-aos="flip-up">
        Swedish
        </li>
        <li data-aos="flip-up">
        Russian
        </li>
        <li data-aos="flip-up">
        Maternity
        </li>
        <li data-aos="flip-up">
        Lymph Drainage
        </li>
      </ul>
    </div>
    <div className="boxes">
      <h1>Experience</h1>
      <p data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"> Since 2018 I've been able using a variety of
        tools, techniques, and modalities to help improve
        posture, relieve pain, and improve overall health
        and wellness. Whether it's at a relaxing spa, 
        or Olympic Trials I've done it.
      </p>
      <h1>Education:</h1>
      <p  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">I graduated from Cortiva Institute of Massage Therapy(Las Vegas)
        in 2018 and passed the MBLEX while still in school so that I may be licensed 
        anywhere in the United States. Currently I'm working with a license 
        in Minnesota. Cortiva was awesome because we had constant hand on
        practice with 750 hours in the base program and an additional 250 in the
        Master Bodyworker Program which I completed in quick succession. 
        </p>
    </div>
      <div className="massage">
        <div className="grids">
        <div 
          // data-aos="fade-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="8000"
          >
            </div>
    </div>
    </div>
    <Footer />
  </>)
}

export default Massage;
