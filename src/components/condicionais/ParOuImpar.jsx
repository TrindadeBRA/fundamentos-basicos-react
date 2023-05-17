import React from 'react'

export default function ParOuImpar(props){

    const isPar = props.n % 2 === 0

    return (
        <div>
            <p>O numero "{props.n}" é :</p>
            { isPar ? <h1>Par</h1> : <h1>Impar</h1> }
        </div>
    )
}