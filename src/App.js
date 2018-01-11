import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// Covered in the MobX Section
import {observer} from 'mobx-react';
// Covered in the MobX Section
import _ from 'lodash';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {List} from 'material-ui/List';

// Relative imports
import Promiss from './components/Promiss';
import PromissDetails from './components/PromissDetails';
import AddPromissDialog from './components/AddPromissDialog';

const propTypes = {
    store: PropTypes.object,
    addPromissStore: PropTypes.object
};

@observer
class App extends PureComponent {
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

    renderPromisses() {
        return (
            <List>
                {this.props.store.promisses.map((promiss) => (
                <Promiss
                    done={promiss.id === this.props.store.selectedId}
                    key={promiss.name}
                    name={promiss.name}
                    onClick={() => {
                        this.props.store.selectPromiss(promiss)
                    }}
                />
                ))}
            </List>
        )
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                    <span>
                        <h3>My Promisses</h3>

                    </span>
                        {this.renderSelection()}
                        {this.renderPromisses()}
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <FloatingActionButton onClick={this.handleOpenAddPromissDialog}>
                        <ContentAdd/>
                    </FloatingActionButton>
                    <AddPromissDialog store={this.props.addPromissStore} open={false}
                                      onClose={this.handleCloseAddPromissDialog} title="bla"/>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = propTypes;
export default App;