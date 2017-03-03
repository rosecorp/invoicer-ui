import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInvoices } from '../../actions/index';
import { InvoiceDetails } from './invoice_details';

class InvoiceList extends Component {

  componentWillMount() {
    this.props.fetchInvoices();
  }

  onRowClick() {
    console.log('test');
    return (

      <div>test</div>
    )
  }

  dateMonth(date) {
    let currentDate = new Date(date).toLocaleString("en-gb", { month: "long" });
    return (
      <div>{currentDate}</div>
    );
  }

  renderInvoices() {
    let i = 0;
    return this.props.invoices.invoices.map((invoice) => {
      return (
        < a href="#" key={i++} onClick={this.onRowClick.bind(this)}>
          <div className="invoice row">
            <div className="col-lg-2">{invoice.number}</div>
            <div className="col-lg-2">{this.dateMonth(invoice.date)}</div>
            <div className="col-lg-2">{invoice.daysWorked}</div>
            <div className="col-lg-2">{invoice.amountToPayPerDay}</div>
            <div className="col-lg-2">{invoice.percentage}</div>
          </div>
        </a>
      )
    });

  }

  render() {
    return (
      <div className="panel panel-headline">
        <div className="panel-heading">
          <h4>Invoices</h4>
        </div>
        <div className="invoice panel-body">
            <div className="invoice heading row">
              <div className="col-lg-2">Number</div>
              <div className="col-lg-2">Date</div>
              <div className="col-lg-2">Days worked</div>
              <div className="col-lg-2">Amount to pay</div>
              <div className="col-lg-2">VAT(%)</div>
            </div>
            {this.renderInvoices()}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { invoices: state.invoices }
}

export default connect(mapStateToProps, { fetchInvoices })(InvoiceList);
