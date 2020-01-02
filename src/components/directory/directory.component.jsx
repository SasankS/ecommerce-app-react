import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../selectors/directory';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

function Directory({ sections }) {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherProps }) => <MenuItem key={ id } { ...otherProps } />)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory);