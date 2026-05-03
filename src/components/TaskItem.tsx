import type { Task } from "../types"

type TasksItemProps = {
    task: Task
    toggleTask: (id: number) => void
}

function TaskItem({task, toggleTask}: TasksItemProps) {
    const checkboxId = `checkbox-${task.id}`

    return (
        <li>
            {task.title} <br />
            {/* update to toggle switch later */}
            <input 
                type="checkbox" 
                id={checkboxId} 
                onChange={() => toggleTask(task.id)}
                checked={task.completed}
            />
            <label htmlFor={checkboxId}>
                {task.completed ? "COMPLETED" : "TO DO"}
            </label>
        </li>
    )
}

export default TaskItem