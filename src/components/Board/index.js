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
    adcElemento();
  }, [Api.board.style.gridtemplatecolumns]);

  function adcElemento() {
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("nelcael");
    divNova.style.borderLeft = "10px";
    divNova.style.borderColor="black";
    // divNova.style.maxWidth = "100%";
    // divNova.style.alignItems = "center";
    // divNova.style.justifyContent = "center";
    // divNova.style.borderLeft = "1px";
    // divNova.style.borderColor = "#ffff";

    divNova.appendChild(conteudoNovo);
    var list = document.getElementById("div1");
    list.insertBefore(divNova, list.childNodes[0]);
  }

  return (
    <div className="container-board">
      {/* linhas */}
      <div className="context-linha">
        {linhas.map((item, key) => (
          <Linha className="linhas" key={key} />
        ))}
      </div>

      {/* coluna  */}
      <div className="context-coluna" id="div1">
        {/* {coluna.map((item, key) => (
          <Coluna className="colunas" key={key} />
        ))} */}
      </div>
    </div>
  );
};
export default Board;
