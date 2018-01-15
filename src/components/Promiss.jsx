import React from 'react';
import PropTypes from 'prop-types';
import {observer} from "mobx-react/index";
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui-next/ExpansionPanel';

import Typography from 'material-ui-next/Typography';

const propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string,
    done: PropTypes.bool
};


@observer
class Promiss extends React.Component {
    render() {
        const { onClick, dueDate, name } = this.props;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {dueDate}
                    </Typography>
                </ExpansionPanelDetails>
            {/*<ListItem onClick={onClick} primaryText={name}/>*/}
            </ExpansionPanel>
        );
    }
}

Promiss.propTypes = propTypes;
export default Promiss;