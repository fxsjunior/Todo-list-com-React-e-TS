import { VscAdd } from "react-icons/vsc";
import './styles.css'
import { useState } from "react";
import { ITask } from "../Interfaces";
import ListTask from "../Task-list";



const TaskInput = () => {

    const [task, setTask] = useState('') // guardar a informação do usuário

    const [todoList, setTodoList] = useState<ITask[]>([]) // guardar as tasks criada, para tipar esse state é preciso crair uma interface

    function addTask(e: any) {
        e.preventDefault()
        const idRandom = (num: number) => Math.floor(Math.random() * num)


        const newTask = { id: idRandom(999999999999), description: task }

        setTodoList([...todoList, newTask])
    }

    return (
        <>
            <form action="" className='form'>
                <input type="text" placeholder='Adicione uma nova tarefa' className='input' value={task} onChange={(event) => setTask(event.target.value)} />
                <button type='submit' className='botaoCriar' onClick={addTask}  >Criar <VscAdd size={20} /></button>

            </form>
            {todoList.map((task, key) => (
                <ListTask key={key} task={task} />
            ))}
        </>
    );
}

export default TaskInput;