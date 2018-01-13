import React from 'react';
import PropTypes from 'prop-types';
import Promiss from './Promiss'
import {List} from 'material-ui/List';

const propTypes = {
    promisses: PropTypes.array,
    onClick: PropTypes.function
};

const PromissList = ({promisses, onClick}) => (
        <List>
            {promisses.map((promiss) => (
                <Promiss
                    key={promiss.name}
                    name={promiss.name}
                    onClick={() => {
                        onClick(promiss)
                    }}
                />
            ))}
        </List>

    );

PromissList.propTypes = propTypes;
export default PromissList;