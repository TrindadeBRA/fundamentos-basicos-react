import React from 'react'

export default function DiretaFilho(props){

    return (
        <div>
            <p>{props.nome}</p>
            <p>{props.idade}</p>
            <p>{props.nerd ? 'true' : 'false'}</p>
        </div>
    )
}