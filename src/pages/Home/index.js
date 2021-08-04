//react and css
import './style.css'
import {useState} from 'react'

//components
import Properties from '../../components/Properties/Index';
import Board from '../../components/Board';
import Layout from '../../components/Layout';
import Components from '../../components/Components';

// json
import Api from '../../../Api.json'

//a página Home deverá ser montado todo o esquema do Drag In Drop,
//seguindo conforme a documentação do beautiful-dnd

const Home = () => {
  const [linha, setLinha] = useState(1);
  const [Coluna, setColuna] = useState(1);
  
  return (
    <>
      <Layout >
        <div className="grid-container">

          <div className="components">
            <Components />
          </div>

          {/* <div className="board"> */}
            <Board className="board" coluna={Coluna} linha={linha}/>
          {/* </div> */}

          <div className="properties">
            <Properties linha={linha} setLinha={setLinha} coluna={Coluna} setColuna={setColuna}/>
          </div>

        </div>
      </Layout>
    </>  
  );
}

export default Home;