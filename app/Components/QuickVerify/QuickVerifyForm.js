import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const validate = values => {
  console.info('validatevalues', values);
  const errors = {}
  if (!values.name) {
    errors.name = 'Required*'
  }

  if (!values.number) {
    errors.number = 'Required*'
  }


  if (!values.cv) {
    errors.cv = 'Required*'
  }
  if (!values.address) {
    errors.address = 'Required*'
  }
  if (!values.zip) {
    errors.zip = 'Required*'
  }
  return errors;
}

const renderField = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label className="labelTxt">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" />
    {touched && ((error && <span className="errorTxt">{error}</span>))}
  </div>
)

const customrenderField = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label className="labelTxt">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" style={{ width: '21%' }} />
    {touched && ((error && <span className="errorTxt">{error}</span>))}
  </div>
)
const customrenderField1 = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label className="labelTxt">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" style={{ "width": '100%' }} />
    {touched && ((error && <span className="errorTxt">{error}</span>))}
  </div>
)

const customrenderFieldyear = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label className="labelTxt">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" style={{ "width": '50%' }} />
    {touched && ((error && <span className="errorTxt">{error}</span>))}
  </div>
)

const customrenderFieldcity = ({ placeholder, input, label, type, meta: { touched, error } }) => (
  <div className='form-group'>
    <label className="labelTxt">{label}</label>
    <input {...input} placeholder={placeholder} type={type} className="form-control" style={{ "width": '50%' }} />
    {touched && ((error && <span className="errorTxt">{error}</span>))}
  </div>
)

const QuickVerifyForm = (props) => {
  // console.log('props######### ', props)
  const { handleSubmit, pristine, submitting, reset, dirty, loginError, submitCase } = props;


  const handleSubmitForm = (values) => {
    submitCase(values);
  };

  
  return (
    <div className="loginBoxWrap">
      <div className="loginBox">
        <form onSubmit={handleSubmit(handleSubmitForm)} >
          <div className="Formpagewrap">
            <Field name="name" component={renderField} label="Name on Card" />
            <Field name="number" type="number" component={renderField} label="Card Number" />
            <Field name="month" type="number" component={customrenderField} label="Exp.date" placeholder="MM" />
            <div className="expirydate">
              <Field name="year" type="number"  component={customrenderFieldyear} placeholder="YYYY" />
            </div>
            <div className="cvnumber">
              <Field name="cv" type="password" component={customrenderField1} label="CV" />
            </div><br />
            <input name="checkbox" type="checkbox" className="checkmark" /> Use address from business information <br /><br />
            <Field name="address" type="text" component={renderField} label="Street Address" />
            <Field name="state" type="text" component={customrenderField} label="state" />
            <div className="city">
              <Field name="city" type="text" component={customrenderFieldcity} label="City" />
            </div>
            <div className="zip">
              <Field name="zip" type="number" component={customrenderField1} label="Zip" />
            </div><br /><br />
            <button className="btn btn-lg navbutton" disabled={pristine || submitting}>
              <BrowserRouter><Link to="/businessinfo">Back </Link></BrowserRouter>
            </button> &nbsp;
                  <button className="btn btn-lg navbutton" disabled={pristine || submitting} >Next
                  {/*<BrowserRouter><Link to="/shoppingpreferences">Next </Link></BrowserRouter>*/}

            </button><br />
          </div>

        </form>
      </div>
    </div>
  )
}


const QuickVerify = reduxForm({
  form: 'login',
  validate,
})(QuickVerifyForm);

export default QuickVerify;