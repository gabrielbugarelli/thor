import Layout from './components/Layout'
import Header from './components/Header'
import Painel from './components/Painel'
import Board from './components/Board'
import Footer from './components/Footer'

import './style.css'

function App() {

  return (
    <Layout classe='grid-container'>
      <div className='header'>
        <Header />
      </div>
      <div className='painel'>
        <Painel />
      </div>
      <div className='board'>
        <Board />
      </div>
      <div className='painel-2'>
        <Painel />
      </div>
    </Layout>
  );
}

export default App;
