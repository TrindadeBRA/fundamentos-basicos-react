import React, { useState } from 'react'
import "./Input.css"

export default function Input(props) {

    const [valor, setValor] = useState('Inicial')

    function qndMudar(e){
        setValor(e.target.value)
    }



    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <input value={valor} onChange={qndMudar}/>
            <input value={valor} readOnly/>
            <input value={undefined}/>
        </div>
    )
}