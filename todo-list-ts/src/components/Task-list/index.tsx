import { BsCircle } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import './styles.css'
import { ITask } from "../Interfaces";

interface TaskProps {
    task: ITask,
    deleteTask(DeleteTaskId: number): void //void pq não retorna nada
}

const ListTask = ({task, deleteTask}: TaskProps) => {


    return (
        <div className="tasks-list">
            <div className="task">
                <div className='task-description'>
                    <BsCircle />
                    <p>{task.description}</p>
                </div>
                <button
                    type='button'
                    className='remove'
                    onClick={() => deleteTask(task.id)}>
                    <BsTrash3Fill size={24} />
                </button>
            </div>
        </div>
    );
}

export default ListTask;