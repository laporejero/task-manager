import { useEffect, useState } from 'react'
import type { Filter, Task } from './types/types'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState<Filter>("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed
    if (filter === "Completed") return task.completed
    return true
  })

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data: Task[]) => setTasks(data))
      .catch(err => {
        console.error('Fetch failed:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  function toggleTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function addTask() {
    if (!newTask.trim()) {
      alert("Task cannot me empty")
      return
    }

    const newItem: Task = {
      id: Date.now(),
      title: newTask,
      completed: false
    }

    // add new task to the tasks array
    setTasks(prevTask => [...prevTask, newItem])
    // sets the newTask into empty strings again
    setNewTask("")
  }

  let content

  if (loading) {
    content = <p>Loading tasks...</p>
  } else if (error) {
    content = <p>Error: {error}</p>
  } else if (filteredTasks.length === 0) {
    content = <p>No tasks available</p>
  } else {
    content = (
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    )
  }

  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      {content}
    </>
  )
}

export default App
