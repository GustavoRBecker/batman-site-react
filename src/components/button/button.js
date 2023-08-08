import React from 'react';
import './styles.css'

function Button({ name, whichButton }) {
    return (
        <button className= {whichButton ? 'button' : 'button2'}>{name}</button>
    )
}

export default Button