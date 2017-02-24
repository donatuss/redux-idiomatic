import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Button, Icon} from 'semantic-ui-react';

const FilterLink = ({filter, children}, {router}) => {

    const isActive = router.isActive('/' + (filter === 'all' ? '' : filter));

    return (
        <Link to={filter === 'all' ? '/' : filter}>
            <Button active={isActive} size="small">
                <Icon name={isActive ? 'checkmark' : null}/>{children}<Icon />
            </Button>
        </Link>
    );

};

FilterLink.contextTypes = {
    router: React.PropTypes.object
};

FilterLink.propTypes = {
    filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
    children: PropTypes.node.isRequired,
};

export default FilterLink;