import './styles/App.css'

import { Header } from './components/Header';
import TaskInput from './components/Task-form';
import { ToastContainer, toast } from "react-toastify";


export function App() {
      
  
  return (
    <div className="App">
      <div className='wrapper'>
        <ToastContainer autoClose={2500} pauseOnHover={false}/>
        <Header />

        <main className='main'>
          <TaskInput />

        </main>
      </div>
    </div>
  )
}

