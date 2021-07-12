import React from 'react';
import './ErrorComponet.css';

export const ErrorComponent = () => {
    return (
        <div className='error_component'>
            <span className = 'boom'>Boom!</span>
            <span>Something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
}
