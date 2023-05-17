import React from 'react'

export default function Aleatorio(props){
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2><b>Valor min:</b> { min }</h2>
            <h2><b>Valor max:</b> { max }</h2>
            <h2><b>Valor aleatorio:</b> { aleatorio }</h2>
        </div>
    )
}