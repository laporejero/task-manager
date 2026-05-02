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

  return (
    <>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
