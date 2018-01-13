import React from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';
import {observer} from "mobx-react/index";

const propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    done: PropTypes.bool
};


@observer
class Promiss extends React.Component {
    render() {
        const { onClick, name } = this.props;
        return (
            <ListItem onClick={onClick} primaryText={name}/>
        );
    }
}

Promiss.propTypes = propTypes;
export default Promiss;