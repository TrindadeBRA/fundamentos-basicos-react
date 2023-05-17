import React from 'react'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicionais/UsuarioInfo'
import ParOuImpar from './components/condicionais/ParOuImpar'
import TabelaProdutos from './components/repeticoes/TabelaProdutos'
import ListaAlunos from './components/repeticoes/ListaAlunos'
import Card from './components/layout/Card'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import './App.css'
import Mega from './components/mega/Mega'


export default function App(props) {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            
                <div className='cards'>

                    <Card titulo="Megasena" color="#654">
                        <Mega qtde={6} />
                    </Card>

                    <Card titulo="Contador" color="#123456">
                        <Contador numeroInicial={100} />
                    </Card>

                    <Card titulo="Componente controlado" color="#224526">
                        <Input />
                    </Card>

                    <Card titulo="Comunicacao Indireta" color="#625892">
                        <IndiretaPai></IndiretaPai>
                    </Card>

                    <Card titulo="Comunicacao Direta" color="#934852">
                        <DiretaPai></DiretaPai>
                    </Card>

                    <Card titulo="Condicional - If Else" color="#251551">
                        <UsuarioInfo usuario={{ nome: 'Lucas'}}></UsuarioInfo>
                    </Card>

                    <Card titulo="Condicional - par ou Impar" color="#146897">
                        <ParOuImpar n={5}></ParOuImpar>
                    </Card>

                    <Card titulo="Repetição - Tabela de Produtos" color="#888">
                        <TabelaProdutos></TabelaProdutos>
                    </Card>

                    <Card titulo="Repetição" color="#808">
                        <ListaAlunos></ListaAlunos>
                    </Card>

                    <Card titulo="Componente com Familia" color="#088">
                        <Familia sobrenome="Silva">
                            <FamiliaMembro nome="Pedro"/>
                            <FamiliaMembro nome="Ana"/> 
                            <FamiliaMembro nome="Gustavo"/>
                        </Familia>
                    </Card>

                    <Card titulo="Numero Aleatorio" color="#080">
                        <Aleatorio  min={1} max={10}></Aleatorio>
                    </Card>

                    <Card titulo="Props" color="#800"> 
                        <ComParametro titulo="Segundo Componente" subtitulo="Via props"></ComParametro>
                    </Card>

                    <Card titulo="Primeiro Comp." color="#008"> 
                        <Primeiro></Primeiro>
                    </Card>

                </div>

        </div>
    )
}
