import { VscAdd } from "react-icons/vsc";
import './styles.css'

const addTask = (e: any) => {
    e.preventDefault()
    console.log("fui clicado")
}



const TaskInput = () => {
    return (
        <form action="" className='form'>
            <input type="text" placeholder='Adicione uma nova tarefa' className='input' />
            <button type='submit' className='botaoCriar' onClick={addTask} >Criar <VscAdd size={20} /></button>
        </form>
    );
}

export default TaskInput;