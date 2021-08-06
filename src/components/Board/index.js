// react and css
import React, {useState, useEffect} from 'react';
import './style.css'

// components
import Linha from '../../components/Linha'
import Coluna from '../../components/Coluna'
// json
import Api from '../../Api.json'

const Board = () => {
  // linhas
  var linhas = []
  const valor = Api.board.style.gridtemplaterows
  for (let i = 0; i < valor; i++) {
    linhas.push(i)
  }

  // colunas
  var colunas = []
  const valor2 = Api.board.style.gridtemplatecolumns
  for (let i = 0; i < valor2; i++) {
    colunas.push(i)
  }

  return (
    <div className='context'>
        {linhas.map((item,key)=>{
          return(
            <Linha key={key} />
          )
        })}
        {colunas.map((item,key)=>{
          return(
            <Coluna key={key}/>
          )
        })}
    </div>
  );
}
export default Board;
