type TaskFormProps = {
    newTask: string
    setNewTask: (v: string) => void
    addTask: () => void
}

function TaskForm({ newTask, setNewTask, addTask }: TaskFormProps) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="add-task">New Task:</label>
            <input 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />

            <button onClick={addTask}>Add</button>
        </form>
    )
}

export default TaskForm