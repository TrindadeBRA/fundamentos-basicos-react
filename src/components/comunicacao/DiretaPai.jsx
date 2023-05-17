import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){

    return (
        <div>
            <DiretaFilho nome="Lucas" idade={25} nerd={true}/>
            <DiretaFilho nome="João" idade={12} nerd={false}/>
        </div>
    )
}