import todoLogo from '../../assets/todo-logo.svg.svg'
import './styles.css'

export function Header() {

    return (
        <header className='header'>
          <img src={todoLogo} alt='Logo todo lsit' />
        </header>
    )
}