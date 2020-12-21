import {observable, action} from 'mobx'


class Store{

  @observable isInfoPage = true

  @action setPage = () => {
    this.isInfoPage = !this.isInfoPage
  }

}

const store = new Store
export default store