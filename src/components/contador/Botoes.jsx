import React from 'react'

export default function Botoes(props){

    return (
        <div>
            <button onClick={props.inc}>+</button>
            <button onClick={props.dec}>-</button>
        </div>
    )
}