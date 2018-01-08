import {observable, action, useStrict} from 'mobx';

useStrict(true);


class AddPromissStore {
    @observable open = false;

    @action setOpen(open) {
        this.open = open;
    }

}

const addPromissStore = new AddPromissStore();
export default addPromissStore;