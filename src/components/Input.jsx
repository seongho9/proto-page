import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import './Input.css';

const Input = () => {

    const [text, setText] = useState('The extent of the area or subject matter that something deals with or to which it is relevant. The opportunity or possibility to do or deal with something.\n A purpose, end, or intention. A telescope, microscope, or other device having a name ending in -scope. The length of cable extended when a ship rides at anchor. The number of terms or arguments affected by an operator such as a quantifier or conjunction. Assess or investigate something. Set the scope of (a projected undertaking). Look at carefully; scan. Mid 16th century (in the sense ‘target for shooting at’): from Italian scopo ‘aim’, from Greek skopos ‘target’, from skeptesthai ‘look out’. scope (sense 3 of the noun) is derived from -scope.');

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const onClick = () => {
        setText('');
    }
    return (
        <div className="test">
            <button type="button" onClick={onClick}>{<MdOutlineDelete />}</button>
            <textarea value={text} onChange={handleChange} />
        </div>
    )
};
export default Input;