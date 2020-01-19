import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './styles';

export default WrapperContainer => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (<WrapperContainer { ...otherProps } />);
}