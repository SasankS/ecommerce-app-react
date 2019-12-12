import React from 'react';

import './menu-item.styles.scss';

export default ({ title, imgURL, size }) => {
    return (
        <div className={ `${size} menu-item` }>
            <div style={ { backgroundImage: `url(${imgURL})` } } className="background-image"></div>
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitles'>Shop Now</span>
            </div>
        </div>
    );
}
