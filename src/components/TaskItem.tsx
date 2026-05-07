import type { Task } from "../types/types"

type TasksItemProps = {
    task: Task
    toggleTask: (id: number) => void
}

function TaskItem({task, toggleTask}: TasksItemProps) {
    const checkboxId = `checkbox-${task.id}`

    return (
        <li>
            <span style={{ textDecoration: task.completed ? "line-through green" : "" }}>       
                {task.title}
            </span>
            <br />
            <label htmlFor={checkboxId}>
                {task.completed ? "Task Completed" : "To Do"}
                <input 
                    type="checkbox" 
                    className="task-checkbox"
                    id={checkboxId} 
                    onChange={() => toggleTask(task.id)}
                    checked={task.completed}
                />
            </label>
        </li>
    )
}

export default TaskItem