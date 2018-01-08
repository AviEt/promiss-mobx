import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { observer } from 'mobx-react';

@observer
export default class AddPromissDialog extends React.Component {

    constructor(store, props) {
        super(props);
        this.store = store;
    }

    handleClose = () => {
        this.props.store.setOpen(false)
    }

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Dialog With Date Picker"
                    actions={actions}
                    modal={false}
                    open={this.props.store.open}
                    onRequestClose={this.handleClose}
                >
                    Open a Date Picker dialog from within a dialog.
                    <DatePicker hintText="Date Picker" />
                </Dialog>
            </div>
        );
    }
}