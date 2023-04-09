import './styles/App.css'
import todoLogo from './assets/todo-logo.svg.svg'
import emptyTask from './assets/empty.tasks.svg.svg'
import { VscAdd } from "react-icons/vsc";
import { BsCircle } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";


export function App() {
  const addTask = () => {
    console.log("fui clicado")
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <header className='header'>
          <img src={todoLogo} alt='Logo todo lsit' />
        </header>

        <main className='main'>
          <form action="" className='form'>
            <input type="text" placeholder='Adicione uma nova tarefa' className='input' />
            <button type='submit' className='botaoCriar' onClick={() => addTask} >Criar <VscAdd size={20} /></button>
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

          <div className="tasks_list">
            <div className="task">
              <div>
                <BsCircle />
                <p>Dar banho nos cachorros</p>
              </div>
              <BsTrash3Fill />
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}

