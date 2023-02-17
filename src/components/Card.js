import React from 'react';
import classnames from 'classnames';
import './card.css'
import stevensShirt from './images/stevensShirt.jpeg';

function Card({ onClick, card, index, isInactive, isFlipped, isDisabled }) {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };
    return (
        <div className={classnames("card", {
            "is-flipped": isFlipped,
            "is-inactive": isInactive
        })}
            onClick={handleClick}>
            <div className='card-face card-front-face'>
                <img src={stevensShirt} alt='stevens star shirt' />
            </div>
            <div className='card-face card-back-face'>
                <img src={card.image} />
            </div>
        </div>
    );
}

export default Card