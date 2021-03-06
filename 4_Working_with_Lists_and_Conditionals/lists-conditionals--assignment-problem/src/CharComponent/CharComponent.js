import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer'
    };
    return (
        <div style={style} onClick={props.charClicked}>
            <p>{props.char}</p>
        </div>
    );
};

export default charComponent;