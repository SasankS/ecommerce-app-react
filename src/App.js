import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout';

import Header from './components/header/header-component';

import { auth, createUserProfileDocument } from './firebase/utils';

import { setCurrentUser } from './actions/user';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './selectors/user';

import './App.css';

class App extends React.Component {
    unsubscribeFromAuth = null

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            }
            else {
                setCurrentUser(user);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={ HomePage }></Route>
                    <Route path='/shop' component={ ShopPage }></Route>
                    <Route exact path='/checkout' component={ CheckoutPage }></Route>
                    <Route path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />) }></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
