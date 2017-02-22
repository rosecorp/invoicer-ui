import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCustomer, deleteCustomer } from '../../actions/index';
import { Link } from 'react-router';

class CustomerList extends Component {
  static contextTypes = {
      router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchCustomer();
  }

  onDeleteClick(customerId) {
    this.props.deleteCustomer(customerId)
      .then(() => { this.context.router.push({
        pathname: '/customer/list'
        });
      });
  }

  renderCustomers() {
    if(!this.props.customers.customers) {
      return (
        <div className="row show-grid">
          <div className="col-xs-1 col-sm-1"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></div>
          <div className="col-xs-11 col-sm-11">Loading...</div>
        </div>
      )
     }
     let i = 0;
     return this.props.customers.customers.map((customer) => {
        return (
          <div className="row row-striped" key={i++}>
            <div className="col-xs-3 col-sm-3">{i}.</div>
            <div className="col-xs-3 col-sm-3">{customer.firstName}</div>
            <div className="col-xs-3 col-sm-3">{customer.lastName}</div>
            <div className="col-xs-3 col-sm-3">
                <button className="btn btn-danger btn-xs" onClick={this.onDeleteClick.bind(this, customer.customerId)}>Delete</button>
            </div>
          </div>
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
              {this.renderCustomers()}
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
  return { customers: state.customers, customer: state.customer }
}

export default connect(mapStateToProps, { fetchCustomer, deleteCustomer })(CustomerList);
