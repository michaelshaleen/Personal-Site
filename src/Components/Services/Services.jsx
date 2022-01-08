import React, { useState, useEffect } from 'react';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import './Services.css';
import Nutrition from '../Nutrition/Nutrition';
import Programming from '../Programming/Programming';

function Services() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [nutrition, setNutrition] = useState(false);
  const handleNutrition = () => setNutrition(!nutrition);

  return (<>


  
  </>)
}

export default Services;
