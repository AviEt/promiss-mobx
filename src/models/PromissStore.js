import { observable, action, computed, useStrict } from 'mobx';
import axios from 'axios';

useStrict(true);

class PromissStore {
    @observable promisses = [];
    @observable selectedPromiss = {};
    @computed get selectedId() { return this.selectedPromiss.id; }
    // In strict mode, only actions can modify mobx state
    @action setPromisses = (promisses) => {
        this.promisses = [...promisses]; }
    @action selectPromiss = (promiss) => { this.selectedPromiss = promiss; }
    // Managing how we clear our observable state
    @action clearSelectedPromiss = () => { this.selectedPromiss = {}; }
    // An example that's a little more complex
    @action getPromisses() {
        //Managing Async tasks like ajax calls with Mobx actions
        axios.get('http://jsonplaceholder.typicode.com/users').then( response => {
            //this.setPromisses(response.data);
            this.setPromisses([
                {
                    name: "Promiss1",
                    done: true,
                    dueDate: "14-05-2018"
                },
                {
                    name: "Promiss2",
                    done: false,
                    dueDate: "14-05-2018"
                },
                {
                    name: "Promiss3",
                    done: true,
                    dueDate: "14-05-2018"
                },
            ])
        });

    }
}

const store = new PromissStore();

export default store;
export { PromissStore };