import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/cart';
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, CollectionItemButton } from './styles';


function CollectionItem({ item, addItem }) {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={ imageUrl } />
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>{ price }</PriceContainer>
            </CollectionFooterContainer>
            <CollectionItemButton onClick={ () => addItem(item) } inverted>Add to Cart</CollectionItemButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);