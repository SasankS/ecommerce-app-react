import React from 'react'

import SignIn from '../../components/signin';
import SignUp from '../../components/signup';

import './sign-in-and-sign-up.styles.scss';

export default function () {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}
