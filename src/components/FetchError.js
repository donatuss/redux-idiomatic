import React, {PropTypes} from 'react';

const FetchError = ({message, onRetry}) => (
    <div>
        <p>Could not fetch todos. {message}<span style={{margin: 4}}/>
            <button onClick={onRetry}>Retry</button>
        </p>
    </div>
);

FetchError.propTypes = {
    message: PropTypes.string.isRequired,
    onRetry: PropTypes.func.isRequired,
};


export default FetchError;
