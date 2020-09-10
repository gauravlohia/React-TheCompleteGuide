import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My name is</p>
            <p>Chika chika {props.username}</p>
        </div>
    );
};

export default userOutput;