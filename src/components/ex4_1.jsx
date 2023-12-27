import React, {useState} from 'react';
import ButtonModelEX4 from "./ex4_3";
import DisplayEx4 from "./ex4_2";

const PlusButtons = () => {
    const [displResult, setDisplResult] = useState(777)

    const action = (value) => {
        setDisplResult(displResult + value)
    }

    return (
        <div>
            <ButtonModelEX4 text="+10" value={+10} action={action}/>
            <ButtonModelEX4 text="-100" value={-100} action={action}/>
            <ButtonModelEX4 text="+25" value={+25} action={action}/>
            <DisplayEx4 numFromButton={displResult}/>
        </div>
    );
};

export default PlusButtons;
