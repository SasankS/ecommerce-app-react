import React from 'react'

import CustomButton from '../custom-button';
import './cart-dropdown.styles.scss';


export default function () {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}
