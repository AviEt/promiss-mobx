import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TagsAutoCompleteInput from './TagsAutoCompleteInput'

import {observer} from 'mobx-react';

@observer
export default class AddPromissDialog extends React.Component {

    constructor(props) {
        super(props);
        this.onClose = props.onClose;
    }

    handleClose = () => {
        this.props.store.setOpen(false);
        this.onClose({dueDate: this.props.store.date, name: this.props.store.title, done: false});
    }

    handleDateChange = (e, date) => {
        this.props.store.setDate(date);
    }

    handleTitleChange = (e, title) => {
        this.props.store.setTitle(title);
    }

    render() {
        const actions = this.actions();

        return (
            <div>
                <Dialog
                    title="Promise something to yourself"
                    actions={actions}
                    modal={false}
                    open={this.props.store.open}
                >
                    <TextField hintText="hint" onChange={this.handleTitleChange}/>
                    <DatePicker hintText="Due date" onChange={this.handleDateChange}/>
                    <TagsAutoCompleteInput chips={this.props.promissChipStore.chips}/>
                </Dialog>
            </div>
        );
    }



    actions = () => {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return actions;
    }
}