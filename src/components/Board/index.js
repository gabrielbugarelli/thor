// react and css
import { useState, useEffect } from "react";
import "./style.css";

// components
import Linha from "../../components/Linha";
import Coluna from "../../components/Coluna";

// json
import Api from "../../Api.json";

const Board = () => {
  const [linhas, setLinhas] = useState([]);
  const [coluna, setColuna] = useState([]);
  const [colunaAtual, setColunaAtual] = useState(0);

  // ----LINHAS -----
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

    if (Api.board.style.gridtemplatecolumns > colunaAtual ) {
      setColunaAtual(colunaAtual + 1)
      if (Api.board.style.gridtemplatecolumns > 1) {
        adicionarElement();
      }
      
    } else if (Api.board.style.gridtemplatecolumns < colunaAtual) {
      setColunaAtual(colunaAtual - 1)
      removeElement();
    }
  }, [Api.board.style.gridtemplatecolumns]);

  function adicionarElement() {
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("");
    divNova.appendChild(conteudoNovo);
    var list = document.getElementById("div1");
    list.insertBefore(divNova, list.childNodes[0]);
  }

  function removeElement() {
    var list = document.getElementById("div1");
    list.removeChild(list.firstChild)
  }

  return (
    <div className="container-board">
      {/* linhas */}
      <div className="context-linha">
        {linhas.map((item, key) => (
          <Linha className="linhas" key={key} />
        ))}
      </div>

      {/* COLUNA  */}

      <div className="context-coluna" id="div1">
        {/* {coluna.map((item, key) => (
          <Coluna className="colunas" key={key} />
        ))} */}
      </div>
    </div>
  );
};
export default Board;
