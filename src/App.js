import React, {PureComponent} from 'react';
// Covered in the MobX Section
import {observer, PropTypes} from 'mobx-react';
// Covered in the MobX Section
import _ from 'lodash';
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'

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

    renderPromisses() {
        return this.props.store.promisses.map((promiss) => (
            <Promiss
                done={promiss.id === this.props.store.selectedId}
                key={promiss.id}
                name={promiss.name}
                onClick={ () => {
                    this.props.store.selectPromiss(promiss)
                } }
            />
        ));
    }

    render() {
        return (
            <MuiThemeProvider>
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
                    <ContentAdd />
                </FloatingActionButton>
                <AddPromissDialog store={this.props.addPromissStore} open={false}/>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = propTypes;
export default App;