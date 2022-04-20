import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default function ListaProdutos(){

    const [produtos,setProdutos]=useState([])

    useEffect(()=>{
        axios.get('https://ApiReacttest1.phrmarques.repl.co')
            .then(res=>{
                const dadosProdutos=res.data
                setProdutos(dadosProdutos)
            })
        }
    )
        
    return(
        <>
            {produtos.map(
               produto => <div key={produto.id}>{produto.id} - {produto.tipo} - {produto.sabor}</div>
            )}
        </>

    )
    
}