import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';
import { selectCartItems } from '../../selectors/cart';

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

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);