import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const propTypes = {
    promissData: PropTypes.object
};

const PromissDetails = ({promissData}) => (
    <Paper>
        <div>{promissData.name}</div>
        <Divider />
        <ul>
            <li>Done: {promissData.done + ""}</li>
            <li>Due date: {promissData.dueDate + ""}</li>
        </ul>
    </Paper>
);

PromissDetails.propTypes = propTypes;
export default PromissDetails;