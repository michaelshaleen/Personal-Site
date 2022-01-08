import React, { useState, useEffect } from 'react';
import './Nutrition.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from '../Button/Button';
// import Flip from '../Nutrition-Flip/Flip';


function Nutrition() {  
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);
console.log(click);

  return (<>
  <div className="container">
    <div className="nutrition-dropdown"
      onClick={handleClick}>
      <div className={click ? "show" : "hide"}>
        <h2>Nutrition</h2>
      <p >
        All Nutrition coaching consists of
        weekly video/phone/in person meetings. Options
        for daily communication are usually left up 
        to the client.
      </p>
      </div>
    </div>


        {/* <Button 
          className="btn" 
          buttonStyle="btn--outline"
          buttonSize="btn--large" >
            Nutrition Connect
        </Button> */}
    
    
  </div>
  
        

</> )
}

export default Nutrition;
