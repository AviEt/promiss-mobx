import React, { PureComponent } from 'react';
// Covered in the MobX Section
import { observer, PropTypes } from 'mobx-react';
// Covered in the MobX Section
import _ from 'lodash';

// Relative imports
import Promiss from './components/Promiss';
import PromissDetails from './components/PromissDetails';

const propTypes = {
    store: PropTypes.object
};

@observer
class App extends PureComponent {
    componentWillMount() {
        this.props.store.getPromisses();
    }

    renderSelection(){
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

    renderPromisses(){
        return this.props.store.promisses.map((promiss) => (
            <Promiss
                done = {promiss.id === this.props.store.selectedId}
                key = {promiss.id}
                name = {promiss.name}
                onClick = { () => {this.props.store.selectPromiss(promiss)} }
            />
        ));
    }
    render(){
        return (
            <div>
                <h3>My Promisses</h3>
                {this.renderSelection()}
                {this.renderPromisses()}
            </div>
        );
    }
}

App.propTypes = propTypes;
export default App;