import React from 'react';
import {observer} from 'mobx-react';
import AutoComplete from 'material-ui/AutoComplete';

@observer
export default class AddPromissDialog extends React.Component {

    constructor(props) {
        super(props);
        this.tagsValues = [];
        this.props.tags.map((chip) => {
            this.tagsValues.push(chip.label)
        });
    }

    handleUpdateInput = (searchText) => {
        this.setState({
            searchText: searchText,
        });
    };

    handleNewRequest = () => {
        this.setState({
            searchText: '',
        });
    };

    render() {
        let state = {
            searchText: '',
        };


        return (
            <div>
                <AutoComplete
                    hintText="Select tag"
                    searchText={this.state.searchText}
                    onUpdateInput={this.handleUpdateInput}
                    onNewRequest={this.handleNewRequest}
                    dataSource={this.tagValues}
                    filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                    openOnFocus={true}
                />
            </div>
        );
    }
}