import React from 'react'

export default function IndiretaFilho(props){

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <div>Filho</div>
            <button onClick={e => props.qndClucar('Wilian', gerarIdade(), false)}>Forcer Informações!</button>
        </div>
    )
}