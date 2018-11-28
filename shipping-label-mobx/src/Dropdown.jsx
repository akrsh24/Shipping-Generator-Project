import React, { Component } from 'react';
import Table from './Table';
import {observer} from 'mobx-react';

@observer
class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state={
            city:'null'
        };
        this.selectCity = this.selectCity.bind(this);
        this.renderData=this.renderData.bind(this);
    }

    selectCity() {
        let citySelected = this.refs.city.value;
        this.setState({
            city: citySelected
        });
        const api= `https://vast-shore-74260.herokuapp.com/banks?city=${citySelected}`;
        const promise = fetch(api)
        promise
            .then(resp => resp.json())
            .then(data => {
                this.props.storeData(data);
                // this.setState({ reviews: this.state.reviews.concat(review) });
            })
    }

    renderData() {
        let {branch_data}= this.state;
        return branch_data.map((bdata, idx) => {
            return <Table b_data={bdata} key={idx} />
        });
        // console.log(this.state.city);
    }

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <div class="col">
                    <select ref="city" className="form-control" onChange={this.selectCity} value={this.state.city}>
                        <option value="null" disabled selected> City</option>
                        <option value="MUMBAI">MUMBAI</option>
                        <option value="KOLKATA"> KOLKATA</option>
                        <option value="PUNE">PUNE</option>
                        <option value="NOIDA"> NOIDA</option>
                        <option value="BENGALURU"> BENGALURU</option>
                    </select>
                </div>
            </nav>
        );
    }
}

export default Dropdown;