import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function ({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_m0wUiMDcvqq4JPR4JiX6EDfW';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={ `Your total is $${price}` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
}
