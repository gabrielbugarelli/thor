import Layout from './components/Layout'
import Header from './components/Header'
import Painel from './components/Painel'
import Board from './components/Board'
import DragButton from './components/DragButton'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import './style.css'
import { useState } from 'react'

function App() {

  const [lista1, setLista1] = useState([{ id: 1, titulo: 'botao 1' }, { id: 2, titulo: 'botao 2' },])
  const [lista2, setLista2] = useState([{ id: 3, titulo: 'botao 3' }])


  //método para atualizar o array de elementos no droppable
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.source.droppableId == '1') {
      let newLista1 = [...lista1]
      let item = { ...newLista1[result.source.index] }

      newLista1.splice(result.source.index, 1)

      let newLista2 = [...lista2]

      newLista2.push(item)

      setLista1(newLista1)
      setLista2(newLista2)
    }

  }

  return (
    <Layout classe='grid-container'>
      <DragDropContext
        onDragStart={(e) => console.log(e)}
        onDragEnd={onDragEnd}
      >

        <div className='header'>
          <Header />
        </div>

        <Droppable droppableId="1" type="board">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className='painel' >
                <Painel>
                  {
                    lista1.map((element, index) => (
                      <Draggable draggableId={`${element.id}`} key={element.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <DragButton name={element.titulo} />
                          </div>
                        )}
                      </Draggable>
                    ))
                  }


                  {/*
                  <Draggable draggableId="1" key={1} index={1}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DragButton name='BOTÃO 1' />
                      </div>
                    )}
                  </Draggable>

                  <Draggable draggableId="2" key={2} index={2}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DragButton name='BOTÃO 2' />

                      </div>

                    )}
                  </Draggable> */}

                </Painel>
                {provided.placeholder}
              </div>


              {/*
              <div className='board'>
                <Board>
                  <Draggable draggableId="3" key={3} index={3}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <DragButton name='BOTÃO 3' />
                      </div>
                    )}
                  </Draggable>
                </Board>
              </div> */}

            </div>
          )}
        </Droppable>



        <Droppable droppableId="2" type="board">
          {(provided) => (
            <div className='board'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Board>

                {
                  lista2.map((element, index) => (
                    <Draggable draggableId={`${element.id}`} key={index} index={element.id}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <DragButton name={element.titulo} />
                        </div>
                      )}
                    </Draggable>
                  ))
                }

                {/* <Draggable draggableId="3" key={3} index={3}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <DragButton name='BOTÃO 3' />
                    </div>
                  )}
                </Draggable> */}

              </Board>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className='painel-2'>
          <Painel />
        </div>
      </DragDropContext>
    </Layout>
  );
}

export default App;
