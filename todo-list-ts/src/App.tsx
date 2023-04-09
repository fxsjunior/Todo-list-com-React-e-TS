import './App.css'
import todoLogo from './assets/todo-logo.svg.svg'
import { VscAdd } from "react-icons/vsc";
import { BsCircle } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";


export function App() {
  const addTask = () => {
    console.log("fui cli")
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <header>
          <img src={todoLogo} alt='Logo todo lsit' />
        </header>

        <main>
          <form action="">
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit' onClick={() => addTask} >Criar <VscAdd size={20} /></button>
          </form>

          <div className="task-container">
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>tarefas concluídas</p>
              <span>0</span>
            </div>
          </div>

          <div className="empty_task">
            <img src="" alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus items a fazer</p>
            </div>
          </div>

          <div className="tasks_list">
            <div className="task">
              <BsCircle />
              <p>Dar banho nos cachorros</p>
              <BsTrash3Fill />
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}

