import './styles/App.css'
import todoLogo from './assets/todo-logo.svg.svg'
import emptyTask from './assets/empty.tasks.svg.svg'
import { VscAdd } from "react-icons/vsc";
import { BsCircle } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { MdDelete } from 'react-icons/md';
import { Header } from './components/Header';



export function App() {
  const addTask = (e: any) => {
    e.preventDefault()
    console.log("fui clicado")
  }

  function deleteTask() {
    console.log("fui dele")
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <Header />

        <main className='main'>
          <form action="" className='form'>
            <input type="text" placeholder='Adicione uma nova tarefa' className='input' />
            <button type='submit' className='botaoCriar' onClick={addTask} >Criar <VscAdd size={20} /></button>
          </form>


          <div className="task-container">
            <div className='tarefas'>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div className='tarefas'>
              <p>Tarefas concluídas</p>
              <span>0</span>
            </div>
          </div>

          <div className="empty-task">
            <img src={emptyTask} alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus items a fazer</p>
            </div>
          </div>

          <div className="tasks-list">
            <div className="task">
              <div className='task-description'>
                <BsCircle />
                <p>Dar banho nos cachorros </p>
              </div>
              <button
                type='button'
                className='remove'
                onClick={deleteTask}>
                <BsTrash3Fill size={24} />
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}

