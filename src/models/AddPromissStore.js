import {observable, action, useStrict} from 'mobx';

useStrict(true);


class AddPromissStore {
    @observable open = false;
    @observable date = "";
    @observable title = null;

    @action setOpen(open) {
        this.open = open;
    }

    @action setDate(date) {
        this.date = date;
    }

    @action setTitle(title) {
        this.title = title;
    }
}

const addPromissStore = new AddPromissStore();
export default addPromissStore;