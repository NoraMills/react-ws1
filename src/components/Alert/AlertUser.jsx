import React from 'react';
import './AlertUser.css';

const AlertUser = (props) => {
    return (
        <div>
            <button onClick={props.popAlert}>Click Me..or don't</button>
        </div>
    )
}

export default AlertUser;