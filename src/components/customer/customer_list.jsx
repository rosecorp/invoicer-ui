import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer } from '../../actions/index';
import { Link } from 'react-router';

class CustomerList extends Component {
  componentWillMount() {
    this.props.fetchCustomer();
  }

  renderCustomers() {
     let i = 0;
     return this.props.customers.customers.map((customer) => {
        return (
          <li className="list-group-item" key={i++}>
            <span>{customer.firstName}</span>
            <span>{customer.lastName}</span>
          </li>
        )
     });
  }

  render() {
    return (
        <div className="panel panel-headline">
          <div className="panel-heading">
            <h4>List of customers</h4>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.renderCustomers()}
            </ul>
          </div>
          <div className="text-rx-right">
            <Link to="/customer/new" className="btn btn-primary">
              New Customer
            </Link>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return { customers: state.customers }
}

export default connect(mapStateToProps, { fetchCustomer })(CustomerList);
