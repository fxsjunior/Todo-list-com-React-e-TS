import emptyTask from '../../assets/empty.tasks.svg.svg'
import './styles.css'

const TaskEmpty = () => {
    return (
        <div className="empty-task">
            <img src={emptyTask} alt="" />
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus items a fazer</p>
            </div>
        </div>

    );
}

export default TaskEmpty;