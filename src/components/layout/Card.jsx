import React from 'react'
import './Card.css'


export default function Card(props) {
    
    const style = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00',
    }

    return (
        <div className='card' style={style}>
            <div className='title'><b>{props.titulo}</b></div>
            <div className='conteudo'>{props.children}</div>
        </div>
    )
}
