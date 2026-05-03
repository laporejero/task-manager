import { useEffect, useState } from 'react'
import type { Task } from './types'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  function toggleTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ))
  }

  return (
    <>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </>
  )
}

export default App
