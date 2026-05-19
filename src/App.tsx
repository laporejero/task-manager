import { useEffect, useState } from 'react'
import type { Filter, Task } from './types/types'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<Filter>("All")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const filteredTasks = tasks.filter(task => {
    if (filter === "Active") return !task.completed
    if (filter === "Completed") return task.completed
    return true
  })

  useEffect(() => {
    // If localStorage already has tasks saved, use them instead of fetching API.
    const saved = localStorage.getItem("tasks")
    if (saved) {
      setTasks(JSON.parse(saved))
      setLoading(false)
      return
    }

    async function fetchTasksData() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        if (!res.ok) {
          throw new Error(`HTTP failed! status: ${res.status}`)
        }
        const data: Task[] = await res.json()
        setTasks(data)
      } catch (err) {
        console.log(err)
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Something went wrong')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchTasksData()
  }, [])

  // Every time tasks change, save them to the browser
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }, [tasks])

  // Toggle Task feature
  function toggleTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Add task function
  function handleAddTask(taskName: string):void {
    if (!taskName.trim()) {
      alert("Task cannot me empty")
      return
    }

    const newItem: Task = {
      userId: 1,
      id: Date.now(),
      title: taskName,
      completed: false
    }

    // add new task to the tasks array
    setTasks(prevTask => [...prevTask, newItem])
  }

  // Delete task function
  function deleteTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== id)
    )
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
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    )
  }

  return (
    <>
      <h3>Task Manager</h3>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <div>
        {content}
      </div>
    </>
  )
}

export default App
