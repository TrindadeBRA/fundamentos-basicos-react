import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai(props){


    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)


    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        setNome(nomeParam)
        setIdade(idadeParam)
        setNerd(nerdParam)
    }

    return (
        <div>
            <div>
                <span>{nome}</span> - <span>{idade}</span> - <span>{nerd ? 'é nerd!' : 'não é nerd!'}</span>
            </div>
            <IndiretaFilho qndClucar={fornecerInformacoes}/>
        </div>
    )
}