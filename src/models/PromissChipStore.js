import {observable, action, useStrict} from 'mobx';

useStrict(true);

class PromissChipsStore {
    @observable chips = [];


    @action setChips = (chips) => {
        this.chips = [...chips];
    }

    @action addChip = (chip) => {
        this.chips.push(chip);
    }

    // An example that's a little more complex
    @action getChips() {
        this.setChips({
            work: {
                label: "Work",
                avatar: "work"
            },
            financial: {
                label: "Financial",
                avatar: "monetization-on",
            }
        })
    }
}

const promissChipsStore = new PromissChipsStore();

export default promissChipsStore;
export {PromissChipsStore};