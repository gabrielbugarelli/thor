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
  const numeroLinhas = Api.board.style.gridtemplaterows
  for (let i = 0; i < numeroLinhas; i++) {
    linhas.push(i)
  }

  // colunas
  var colunas = []
  const numeroColunas = Api.board.style.gridtemplatecolumns
  for (let i = 0; i < numeroColunas - 1; i++) {
    colunas.push(i)
  }

  return (
    <div className='container-board'>
      {/* linhas */}
      <div className='context-linha'>
        {linhas.map((item,key)=>{
          return(
            <Linha className='linhas' key={key} />
          )
        })}
      </div>
      {/* coluna  */}
      <div className="context-coluna">
        {colunas.map((item, key) => {
          return (
            <Coluna className='colunas' key={key} />
          )
        })}
      </div>
    </div>
  );
}
export default Board;
