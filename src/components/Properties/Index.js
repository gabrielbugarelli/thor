import React from 'react';

const Properties = ({linha, setLinha, coluna, setColuna}) => {
  function handleTeste(e) {
    setLinha(e.target.value)
    console.log(linha);
  }
  
  return (
    <div>
      <h1> Propriedades</h1>
      <h3>linha</h3>
      <input type="text" onChange={(e) => handleTeste(e)} />
      <h3>Coluna</h3>
      <input type="text" onChange={(e)=> setColuna(e.target.value)} />
    </div>
  );
}

export default Properties;