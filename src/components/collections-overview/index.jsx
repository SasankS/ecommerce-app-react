import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../selectors/shop';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

function CollectionsOverview({ collections }) {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={ id } { ...otherProps } />))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

