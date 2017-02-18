import React, { Component, PropTypes } from 'react';
import { content } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCustomer } from '../../actions/index';
import { connect } from 'react-redux';
import {Link} from 'react-router';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
      <input {...input} className="form-control" type={type} placeholder={label}/>
      {touched && (error && <div className="text-help">{error}</div>)}
  </div>
)

class CustomerNew extends Component {
  static contextTypes = {
   router: PropTypes.object
 };
  onSubmit(props){
    this.props.createCustomer(props).then(()=>{this.context.router.push('/customer/list');});
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="panel panel-headline">
        <form onSubmit ={handleSubmit(this.onSubmit.bind(this))}>
          <h3>New Customer</h3>
          <Field label="First name" name="firstName" type="text" component={renderField} />
          <Field label="Last name" name="lastName" type="text" component={renderField} />
          <button type="submit" className="btn btn-primary">New</button>
          <Link to="/customer/list" className="btn btn-danger" >Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.firstName){
    errors.firstName='First name cannot be empty';
  }
  return errors;
}
export default connect(null, {createCustomer})(reduxForm({
  form:'CustomerNewForm',
  validate
})(CustomerNew));
