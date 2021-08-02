//estilos do Home
import './style.css'

//components
import Properties from '../../components/Properties/Index';
import Board from '../../components/Board';
import Layout from '../../components/Layout';
import Components from '../../components/Components';

//a página Home deverá ser montado todo o esquema do Drag In Drop,
//seguindo conforme a documentação do beautiful-dnd

const Home = () => {
  return (
    <>
      <Layout >
        <div className="grid-container">

          <div className="components">
            <Components />
          </div>

          <div className="board">
            <Board />
          </div>

          <div className="properties">
            <Properties />
          </div>

        </div>
      </Layout>
    </>
  );
}

export default Home;
