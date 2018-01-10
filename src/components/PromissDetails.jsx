import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    promissData: PropTypes.object
};

const PromissDetails = ({promissData}) => (
    <div>
        <h1>{promissData.name}</h1>
        <ul>
            <li>Done: {promissData.done + ""}</li>
            <li>Due date: {promissData.dueDate + ""}</li>
        </ul>
    </div>
);

PromissDetails.propTypes = propTypes;
export default PromissDetails;