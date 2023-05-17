import React from 'react'
import produtos from '../../data/produtos'

export default function TabelaProdutos(){
    
    function getProductsTable(){
        return produtos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getProductsTable()}
                </tbody>
            </table>
        </div>
    )

}