import { Link } from 'react-router-dom';

import React from 'react';

function CardItem() {
  return (
    <>
    <li className="cards_item">
      <Link className="cards_item__link">
        <figure className="cards_item_pic-wrap">
          <img src="/" alt="Travel Image"
          className="cards__item__img"/>

          
        </figure>
        <div className="cards__item__info">
          <h5 classNam="cards__item__text"></h5>
        </div>
      </Link>
    </li>
      
    </>
  )
}

export default CardItem;
