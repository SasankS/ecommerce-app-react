import React from 'react';
import { connect } from 'react-redux';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils';
import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../selectors/user';
import { selectCartHidden } from '../../selectors/cart';

function Header({ currentUser, hidden }) {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={ () => auth.signOut() }>SIGN OUT</OptionLink>
                        :
                        <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
