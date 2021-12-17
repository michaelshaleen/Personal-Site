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
      <div className="massage">
        <div className="grids">
        <div 
          // data-aos="fade-left"
          // data-aos-easing="ease-out-cubic"
          // data-aos-duration="8000"
          >
            </div>
        <div 
          data-aos="fade-right" 
          className="boxes" 
          > 
    <div data-aos="fade-left">
      </div>            
          <ul className="list">
          <li>
          <span
            className="list">
            Cupping Therapy
            <DoneOutlineIcon />
          </span>
            Maternity Massage
            <DoneOutlineIcon />
          </li>
            <li>
            <span
              className="list">
                Deep Tissue
              <DoneOutlineIcon />
            </span>
              IMBLEX Graduate
            <DoneOutlineIcon />
            </li>
          <li>
          <span
            className="list">
            Myofascial Release
            <DoneOutlineIcon />
          </span>
            Lymphatic 
            <DoneOutlineIcon />
          </li>
            <li>
            <span
              className="list">
              Hot Stones
              <DoneOutlineIcon />
            </span>
              Craniosacral
              <DoneOutlineIcon />
            </li> 
            <li>
            <span
              className="list">
              Swedish
              <DoneOutlineIcon />
            </span>
              Russian
              <DoneOutlineIcon />
            </li>
          </ul>
        </div>
    </div>
    </div>
    <Footer />
  </>)
}

export default Massage;
