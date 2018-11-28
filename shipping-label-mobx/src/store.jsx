import { observable, action } from 'mobx';

class Store {
     
    @observable
    bdata = [];

    @action
    storeData(data) {
        this.bdata = data;
    }
}

export default Store;