import React from 'react';
import PropTypes from 'prop-types';
import Promiss from './Promiss'
import {PropTypes as MobxPropTypes} from 'mobx-react';
import {observer} from 'mobx-react';

const propTypes = {
    promisses: MobxPropTypes.observableArray,
    onClick: PropTypes.func
};

const PromissList = observer(({promisses, onClick}) => (
    promisses.map((promiss) => (
        <Promiss
            key={promiss.name}
            name={promiss.name}
            dueDate={promiss.dueDate}
            onClick={() => {
                onClick(promiss)
            }}
        />
    ))));


PromissList.propTypes = propTypes;
export default PromissList;