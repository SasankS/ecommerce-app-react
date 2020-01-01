import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../selectors/cart';

import { toggleCartHidden } from '../../actions/cart';

import './cart-dropdown.styles.scss';


function CartDropdown({ cartItems, history, dispatch }) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        (cartItems.map(item => <CartItem key={ item.id } item={ item } />)) :
                        (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            } }
            >
                Go to Checkout
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));