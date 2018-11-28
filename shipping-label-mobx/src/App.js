import React, { Component } from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import Table from './Table';
import { Provider } from '../node_modules/mobx-react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bdata: []
    };
    this.storeData = this.storeData.bind(this);
  }

  storeData(data) {
    this.bdata = data;
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Bank Branches</span>
        </nav>
        <br />
        <div className="row">
          <div className="col-sm-6">
            <Dropdown storeData={this.storeData} />
          </div>
          <div className="col-sm-6">
            <div className="col-sm-12 col-md-12">
              <SearchBar />
              {/* <Route path="/edit-trade/:idd/:commodity/:side/:quantity/:price/:counterparty/:location" component={TradeFormEdit} /> */}
            </div>
          </div>
        </div>
        <hr />
        <div className="">
          <Table data={this.state.bdata} />
        </div>
      </div>
    );
  }
}

export default App;