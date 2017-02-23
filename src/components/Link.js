import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

const Link = ({active, children, onClick}) => {

    if (active) {
        return <Button active size="small"><Icon name='checkmark'/>{children}<Icon /></Button>
    }

    return (
        <a href='#' onClick={e => {
            e.preventDefault();
            onClick();
        }}>
            <Button size="small"><Icon/>{children}<Icon /></Button>
        </a>
    )

};

export default Link;