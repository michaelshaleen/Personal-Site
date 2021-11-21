import React, { useState, useEffect } from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import './Services.css';

function Services() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [nutrition, setNutrition] = useState(false);
  const handleNutrition = () => setNutrition(!nutrition);

  return (

  <ul className="service">
    <div
      className={click ? 'show' : 'hide'}
      onClick={handleClick}>
        <div className="title">
            Programming Details
            <i class="fa fa-times" 
              aria-hidden="true">
            </i>
          <i class="fa fa-chevron-circle-down" 
          aria-hidden="true">
          </i>
      </div>
      <p>
        "Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, sed do 
    eiusmod tempor incididunt ut labore et 
    dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit 
    anim id est laborum." 
        Powerlifting <DoneOutlineIcon />
        CrossFit<DoneOutlineIcon />
        Olympic Weightlifting<DoneOutlineIcon />
      </p>
    </div>
   <div
      className={nutrition ? 'showN' : 'hideN'}
      onClick={handleNutrition}
      >Nutrition
      <i class="fa fa-chevron-circle-down" 
        aria-hidden="true">
      </i>
      <p>I've said it before and I'll say it again,
        you don't need a coach; but give us a ring 
        after 3 months of self teaching technique!
        "Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. 
        
        Platform Experience<DoneOutlineIcon />
        4 Years Coaching Experience<DoneOutlineIcon />
        CrossFit<DoneOutlineIcon />
        Powerlifting<DoneOutlineIcon />
      </p> 
    </div>
  </ul>
  )
}

export default Services;
