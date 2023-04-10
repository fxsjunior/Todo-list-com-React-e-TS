import { BsCircle } from "react-icons/bs";
import { BsTrash3Fill } from "react-icons/bs";
import './styles.css'
import { ITask } from "../Interfaces";

interface TaskProps {
    task: ITask
}

const ListTask = ({task}: TaskProps) => {

    function deleteTask() {
        console.log("fui dele")
    }

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
                    onClick={deleteTask}>
                    <BsTrash3Fill size={24} />
                </button>
            </div>
        </div>
    );
}

export default ListTask;