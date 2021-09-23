import React, { useEffect, useState } from "react";

// Api
import Api from "../../Api.json";

const Properties = ({ linha, setLinha, coluna, setColuna }) => {
  // Api.board.style.gridtemplatecolumns = 1
  // Api.board.style.gridtemplaterows = 1

  function handleLinha(e) {
    if (e.target.value < 1) {
      alert("A Tela tem que ter no minimo uma linha");
    } else {
      if (e.target.value <= 12) {
        setLinha(e.target.value);
        Api.board.style.gridtemplaterows = e.target.value;
      } else {
        alert("O maximo de linhas permitidas é 12");
        setLinha(12);
        Api.board.style.gridtemplaterows = 12;
      }
    }
  }

  function handleColuna(e) {
    if (e.target.value < 1) {
      alert("A tela tem que ter no minimo uma coluna");
    } else {
      if (e.target.value <= 6) {
        setColuna(e.target.value);
        Api.board.style.gridtemplatecolumns = e.target.value;
      } else {
        alert("O maximo de colunas é 6");
        setColuna(6);
        Api.board.style.gridtemplatecolumns = 6;
      }
    }
  }

  return (
    <div>
      <h1> Propriedades</h1>
      <h3>teste de linhas json</h3>
      <input
        type="number"
        value={Api.board.style.gridtemplaterows}
        onChange={(e) => handleLinha(e)}
      />

      <h3>teste de colunas json</h3>
      <input
        type="number"
        value={Api.board.style.gridtemplatecolumns}
        onChange={(e) => handleColuna(e)}
      />
    </div>
  );
};

export default Properties;
