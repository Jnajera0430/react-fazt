import React from 'react'
import TaskList from './TaskList';
import TaskForm from './TaskForm';
function Main() {
  return (
    <div>
        <main /* className='bg-zinc-900 h-screen' */>
        <div /* className='container mx-auto p-10' */ >
            
            <TaskForm />
            <TaskList />
        </div>
        
        </main>
    </div>
  )
}

export default Main