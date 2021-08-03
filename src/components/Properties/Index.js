import React from 'react';

const Properties = ({linha, setLinha, coluna, setColuna}) => {
  function handleTeste(e) {
    if (e.target.value <=12) {
      setLinha(e.target.value)
    }else{
      alert('O maximo de linhas permitidas é 12')
      setLinha(12)
    }
  }
  
  return (
    <div>
      <h1> Propriedades</h1>
      <h3>linha</h3>
      <input type="text" value={linha} onChange={(e) => handleTeste(e)} />
      <h3>Coluna</h3>
      <input type="text" onChange={(e)=> setColuna(e.target.value)} />
    </div>
  );
}

export default Properties;