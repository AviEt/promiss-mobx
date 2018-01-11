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

    constructor(props, name, onClick) {
        super(props);
    }

    render() {
        return (
            <ListItem onClick={this.props.onClick} primaryText={this.props.name}/>
        );
    }
}

Promiss.propTypes = propTypes;
export default Promiss;