import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../selectors/shop';
import WithSpinner from '../with-spinner';
import CollectionsOverview from './';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);
