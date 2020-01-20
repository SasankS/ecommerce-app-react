import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../selectors/shop';
import WithSpinner from '../../components/with-spinner';
import CollectionPage from './';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionPage);
