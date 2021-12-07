import React, {useState, useEffect} from 'react';

function Toast(props) {

    return (
        <div className="toast">
            <p>{props.message}</p>
        </div>
    );

}

export default Toast;
