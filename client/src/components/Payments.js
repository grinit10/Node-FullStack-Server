import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout name='MyFolio' description='$1 for 1 survey' amount={500} token={token => this.props.handletoken(token)} stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className='btn #c2185b pink darken-2'>Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);