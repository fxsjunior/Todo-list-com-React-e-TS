import './styles/App.css'
import todoLogo from './assets/todo-logo.svg.svg'

import { MdDelete } from 'react-icons/md';
import { Header } from './components/Header';
import TaskInput from './components/Task-form';
import TaskCounter from './components/Task-counter';
import TaskEmpty from './components/Empty-tasks';
import ListTask from './components/Task-list';
import { useState } from 'react';


export function App() {
      
  
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />

        <main className='main'>
          <TaskInput />

          <TaskCounter />

          <TaskEmpty />

          {/* <ListTask task={task} /> */}

        </main>
      </div>
    </div>
  )
}

