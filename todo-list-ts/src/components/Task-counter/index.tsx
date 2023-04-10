import './styles.css'

const TaskCounter = () => {
    return (
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

    );
}

export default TaskCounter;