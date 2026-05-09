import type { Task } from "../types/types"
import { IonIcon } from "@ionic/react"
import { trashOutline } from 'ionicons/icons';

type TasksItemProps = {
    task: Task
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
}

function TaskItem({task, toggleTask, deleteTask}: TasksItemProps) {
    const checkboxId = `checkbox-${task.id}`

    return (
        <li>
            <span style={{ textDecoration: task.completed ? "line-through green" : "" }}>       
                <input 
                    type="checkbox" 
                    className="task-checkbox"
                    id={checkboxId} 
                    onChange={() => toggleTask(task.id)}
                    checked={task.completed}
                />
                {task.title}
            </span>
            <br />
            {/* <label htmlFor={checkboxId}>
                {task.completed ? "Task Completed" : "To Do"}
            </label> */}
            {/* Delete Icon */}
            <IonIcon
                icon={trashOutline}
                style={{
                fontSize: '1.8rem',
                color: 'black',
                cursor: 'pointer'
                }}
                onClick={() => deleteTask(task.id)}
            />
        </li>
    )
}

export default TaskItem