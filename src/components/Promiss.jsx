import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    done: PropTypes.bool
};


const Promiss = ({onClick, name, done}) => {
    const classes = done ? 'bold' : '';
    return (
        <li onClick={ onClick } className={classes}>
            { name }
        </li>
    );
}

Promiss.propTypes = propTypes;
export default Promiss;