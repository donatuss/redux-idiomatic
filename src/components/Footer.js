import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <div>
            <FilterLink filter='SHOW_ALL'>All</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
            <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
            <FilterLink filter='SHOW_COMPLETED'>Competed</FilterLink>
    </div>
);

export default Footer;
