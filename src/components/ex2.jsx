import React, {useState} from 'react';

const ButtonCounter = () => {
    let [count, setCount] = useState(0)

    const clickAction = () => {
        setCount(count + 1)
    }
    return (
        <button className="ex2-button" onClick={clickAction}>{count}</button>
    );
};

export default ButtonCounter;
