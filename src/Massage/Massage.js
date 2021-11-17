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
        <p className="intro">
            Through patient attention to detail,
            I work with each client and their unique needs
            in order to obtain long term improvements in posture, 
            pain relief, reduction of stress and an overall improved feeling of health and wellness.
        </p> 
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
