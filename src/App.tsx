import { useEffect, useState } from 'react'
import type { Filter, Task } from './types/types'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState<Filter>("all")

  console.log(filter)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Task[]) => setTasks(data))
  }, [])

  function toggleTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

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

  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </>
  )
}

export default App
