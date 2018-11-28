import React, { Component } from 'react';

class Table extends Component {

    constructor(props) {
        super(props);

        this.renderData = this.renderData.bind(this);
    }

    renderData() {
        return this.props.data.map((data) => {
            return (
                <tr key={data.bank_id}>
                    <td>{data.ifsc}</td>
                    <td>{data.bank_id}</td>
                    <td>{data.branch}</td>
                    <td>{data.address}</td>
                    <td>{data.city}</td>
                    <td>{data.district}</td>
                    <td>{data.state}</td>
                    <td>{data.name}</td>
                    {/* <td><Link to={`edit - trade / ${ trade.idd } /${trade.commodity}/${ trade.side } /${trade.quantity}/${ trade.price } /${trade.counterparty}/${ trade.location } `}><i className="fa fa-edit"></i></Link></td> */}
                    {/* <td><a href="/" onClick={() => this.deleteItem(trade.idd)}><i className="fa fa-trash"></i></a></td> */}
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3> Bank </h3>
                </div>

                <div className="card-body">
                    <table className="table table-hover table-sm-col-md-8">
                        <th scope="col">IFSC</th>
                        <th scope="col">Bank ID</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">District</th>
                        <th scope="col">State</th>
                        <th scope="col">Bank Name</th>

                        <tbody>
                            {this.renderData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Table;