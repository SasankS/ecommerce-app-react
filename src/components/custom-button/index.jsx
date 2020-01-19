import React from 'react';

import { CustomButtonContainer } from './styles';

export default function ({ children, ...otherProps }) {
    return (
        <CustomButtonContainer { ...otherProps }>{ children }</CustomButtonContainer>
    )
};
