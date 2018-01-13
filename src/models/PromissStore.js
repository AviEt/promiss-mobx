import {observable, action, computed, useStrict} from 'mobx';

useStrict(true);

class PromissStore {
    @observable promisses = [];
    @observable selectedPromiss = {};

    @computed get selectedId() {
        return this.selectedPromiss.id;
    }

    // In strict mode, only actions can modify mobx state
    @action setPromisses = (promisses) => {
        this.promisses = [...promisses];
    }

    @action addPromiss = (promiss) => {
        this.promisses.push(promiss);
    }

    @action selectPromiss = (promiss) => {
        this.selectedPromiss = promiss;
    }
    // Managing how we clear our observable state
    @action clearSelectedPromiss = () => {
        this.selectedPromiss = {};
    }

    // An example that's a little more complex
    @action getPromisses() {
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
            {
                name: "Promiss4",
                done: true,
                dueDate: "14-05-2018"
            },
            {
                name: "Promiss5",
                done: true,
                dueDate: "14-05-2018"
            },
            {
                name: "Promiss6",
                done: true,
                dueDate: "14-05-2018"
            },
        ])
    }
}

const promissStore = new PromissStore();

export default promissStore;
export {PromissStore};