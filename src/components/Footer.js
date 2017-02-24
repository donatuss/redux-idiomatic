import React from 'react';

import FilterLink from '../containers/FilterLink';

const Footer = () => (
    <div>
        <FilterLink filter='all'>All</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
        <FilterLink filter='active'>Active</FilterLink>
        <span style={{width: '5px', display: 'inline-block'}}/>
        <FilterLink filter='completed'>Competed</FilterLink>
    </div>
);

export default Footer;
