import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    // ensures that any className added to the card component is then added to its classNames.
    return <div className={classes}>{props.children}</div>;
};

export default Card;