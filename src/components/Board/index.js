// react and css
import React, { useState, useEffect } from "react";
import "./style.css";

// components
import Linha from "../../components/Linha";
import Coluna from "../../components/Coluna";
// json
import Api from "../../Api.json";

const Board = () => {
  // ----LINHAS -----
  
  const [linhas, setLinhas] = useState([]);
  const [coluna, setColuna] = useState([]);

  useEffect(() => {
    let linhasAux = [];
    const numeroLinhas = Api.board.style.gridtemplaterows;
    for (let i = 0; i < numeroLinhas; i++) {
      linhasAux.push(i);
    }
    setLinhas(linhasAux);
  }, [Api.board.style.gridtemplaterows]);

  // ----COLUNAS -----

  useEffect(() => {
    let colunaAux = []
    const numeroColunas = Api.board.style.gridtemplatecolumns;
    for (let i = 0; i < numeroColunas - 1; i++) {
      colunaAux.push(i);
    }
    setColuna(colunaAux)
  }, [Api.board.style.gridtemplatecolumns]);

  return (
    <div className="container-board">
      {/* linhas */}
      <div className="context-linha">
        {linhas.map((item, key) => (
          <Linha className="linhas" key={key} />
        ))}
      </div>

      {/* coluna  */}
      <div className="context-coluna">
        {coluna.map((item, key) => (
          <Coluna className="colunas" key={key} />
        ))}
      </div>
    </div>
  );
};
export default Board;
