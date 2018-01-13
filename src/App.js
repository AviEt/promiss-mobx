import React from 'react';
import PropTypes from 'prop-types';
// Covered in the MobX Section
import {observer} from 'mobx-react';
// Covered in the MobX Section
import _ from 'lodash';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'

// Relative imports
import PromissDetails from './components/PromissDetails';
import AddPromissDialog from './components/AddPromissDialog';
import PromissList from "./components/PromissList";
import Paper from 'material-ui/Paper';

import "./App.css"

const propTypes = {
    store: PropTypes.object,
    addPromissStore: PropTypes.object
};

@observer
class App extends React.Component {
    componentWillMount() {
        this.props.store.getPromisses();
    }

    renderSelection() {
        if (_.isEmpty(this.props.store.selectedPromiss)) return null;
        return (
            <div className='promiss'>
                <PromissDetails promissData={this.props.store.selectedPromiss}/>
                <button onClick={this.props.store.clearSelectedPromiss}>
                    Close Promiss
                </button>
            </div>
        );
    }

    handleOpenAddPromissDialog = () => {
        this.props.addPromissStore.setOpen(true);
    }

    handleCloseAddPromissDialog = (promiss) => {
        this.props.store.addPromiss(promiss);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="content">
                        <div>
                    <span>
                        <h3>My Promisses</h3>

                    </span>
                            {this.renderSelection()}
                            <Paper>
                                <PromissList promisses={this.props.store.promisses}
                                             onClick={this.props.store.selectPromiss}/>
                            </Paper>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <FloatingActionButton onClick={this.handleOpenAddPromissDialog} className="add-promiss-button">
                            <ContentAdd/>
                        </FloatingActionButton>
                        <AddPromissDialog store={this.props.addPromissStore} open={false}
                                          onClose={this.handleCloseAddPromissDialog} title="bla"/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = propTypes;
export default App;