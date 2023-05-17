import React from 'react'

export default function FamiliaMembro(props){
    return (
        <div>
            <h2><b>{props.nome}</b> {props.sobrenome}</h2>
        </div>
    )
}