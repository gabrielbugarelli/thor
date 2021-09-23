//react and css
import {useState} from 'react'
import './style.css'

//components
import Properties from '../../components/Properties/Index';
import Board from '../../components/Board';
import Layout from '../../components/Layout';
import Components from '../../components/Components';

//a página Home deverá ser montado todo o esquema do Drag In Drop,
//seguindo conforme a documentação do beautiful-dnd
const Home = () => {
  const [linha, setLinha] = useState(1);
  const [coluna, setColuna] = useState(1);
  
  return (
    <>
      <Layout >
        <div className="grid-container">

          <div className="components">
            <Components />
          </div>

          <Board className="board" />

          <div className="properties">
            <Properties 
              linha={linha} setLinha={setLinha}
              coluna={coluna} setColuna={setColuna}
            />
          </div>

        </div>
      </Layout>
    </>  
  );
}

export default Home;