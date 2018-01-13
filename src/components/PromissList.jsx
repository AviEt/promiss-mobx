import React from 'react';
import PropTypes from 'prop-types';
import Promiss from './Promiss'
import {List} from 'material-ui/List';
import {PropTypes as MobxPropTypes} from 'mobx-react';

const propTypes = {
    promisses: MobxPropTypes.ObservableArray,
    onClick: PropTypes.function
};

const PromissList = ({promisses, onClick}) =>(
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
        </List>);


PromissList.propTypes = propTypes;
export default PromissList;