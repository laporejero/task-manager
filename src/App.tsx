import { useEffect, useState } from 'react'
import './App.css'

type Post = {
  id: number
  title: string
}

function App() {
  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])

  return (
    <>
      <h1>Task Manager</h1>
      <ul>
        {tasks.slice(0, 5).map(task => (
          <li key={task.id}>{task.title}</li>
        ))}  
      </ul>
    </>
  )
}

export default App
