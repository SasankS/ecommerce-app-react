import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

export default withRouter(({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={ `${size} menu-item` } onClick={ () => history.push(`${match.url}${linkUrl}`) }>
            <div style={ { backgroundImage: `url(${imageUrl})` } } className="background-image"></div>
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitles'>Shop Now</span>
            </div>
        </div>
    );
});
