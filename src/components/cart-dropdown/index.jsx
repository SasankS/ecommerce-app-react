import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';
import './cart-dropdown.styles.scss';


function CartDropdown({ cartItems }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem key={ item.id } item={ item } />)
                }
            </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);