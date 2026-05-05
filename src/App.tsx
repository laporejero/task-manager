import { useEffect, useState } from 'react'
import type { Task } from './types/types'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

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

  function addTask() {
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
      <TaskList tasks={tasks} toggleTask={toggleTask} />
    </>
  )
}

export default App
