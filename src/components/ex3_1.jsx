import React, {useState} from 'react';
import DisplayEx3 from "./ex3_2";

const ButtonCounterEx3 = () => {
    let [count, setCount] = useState(0)

    const clickAction = () => {
        setCount(count + 1)
    }
    return (
        <>
            <button className="ex2-button" onClick={clickAction}>+1</button>
            <DisplayEx3 numFromButton={count}/>
        </>
    );
};

export default ButtonCounterEx3;