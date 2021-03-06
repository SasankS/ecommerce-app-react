import React, { Component } from 'react'

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { auth, signInWithGoogle } from '../../firebase/utils';

import './signin.styles.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (err) {
            console.log(err);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        name='email'
                        type='email'
                        value={ this.state.email }
                        onChange={ this.handleChange }
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={ this.state.password }
                        onChange={ this.handleChange }
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        { '   ' }
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
