// react and css
import React, {useState} from 'react';
import './style.css'

// components

const Board = ({linha, coluna}) => {
    const valor = parseInt(linha)
    var teste = []
    for (let i = 0; i < valor; i++) {
      teste.push(i)
    }
    console.log(teste);

  return (
    <div className='context'>
      
        {teste.map((item,key)=>{
          {console.log('percorreu')}
          return(
            <Testando key={key} />
          )
        })}

      
    </div>
  );
}


const Testando = () => {
  return (
    <div className='linha'>
      testando
    </div>
  );
}




export default Board;
