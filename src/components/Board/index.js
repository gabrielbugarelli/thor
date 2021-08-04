// react and css
import React, {useState} from 'react';
import './style.css'

// components
import Linha from '../../components/Linha'

const Board = ({linha, coluna}) => {
    const valor = parseInt(linha)
    var linhas = []
    for (let i = 0; i < valor; i++) {
      linhas.push(i)
    }

  return (
    <div className='context'>
        {linhas.map((item,key)=>{
          return(
            <Linha key={key} />
          )
        })}
    </div>
  );
}







export default Board;
