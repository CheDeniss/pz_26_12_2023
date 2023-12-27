import React from 'react';

const ButtonModelEX4 = ({text, value, action}) => {
    const func = () => {
        action(value)
    }

    return (
        <div>
            <button className="ex2-button" onClick={func}>{text}</button>
        </div>
    );
};

export default ButtonModelEX4;
