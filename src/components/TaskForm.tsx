import { useState } from "react"

type TaskFormProps = {
    handleAddTask: (title: string) => void
}

function TaskForm({ handleAddTask }: TaskFormProps) {
    const [newTask, setNewTask] = useState<string>("")

    function onAddTask() {
        handleAddTask(newTask)
        // sets the newTask into empty strings again
        setNewTask("")
    }

    return (
        <form className="task-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="add-task">New Task:</label>
            <input 
                type="text"
                id="add-task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={onAddTask}>Add</button>
        </form>
    )
}

export default TaskForm