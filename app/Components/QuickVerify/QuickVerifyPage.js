import React, { Component } from 'react';
import * as userAction from "./userAction";
import { render } from 'react-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './QuickVerify.css';
import QuickVerifyForm from './QuickVerifyForm';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class QuickVerifyPage extends Component {
    constructor() {
        super();
    };

    onSubmit = (data) => {
      console.info('data', data);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="Quickpagewrap">
                    <h1> Get Verified Quicker (Optional) </h1>
                    <div className="skipOption">
                    <BrowserRouter>
                    <p> 
                    <Link to="/ShoppingPreferences">Skip </Link> </p>
                    </BrowserRouter> 
                    </div>
                    <p> Business Credit Card </p> <br />
                    <p> If you have one,it help us verify your account even faster.<b> Your card will not be charged.</b> </p>
                    
                    <React.Fragment>
                        <QuickVerifyForm 
                         submitCase={this.onSubmit}
                         />
                    </React.Fragment>
                    
                </div>
            </div>
        )
    };

}

const mapStateToProps = state =>{
return state;

}

const matchDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign(
        userAction,
    ), dispatch),
  });

export default connect(mapStateToProps,matchDispatchToProps) (QuickVerifyPage);