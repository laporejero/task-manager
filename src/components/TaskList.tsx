import type { Task } from '../types/types'
import TaskItem from "./TaskItem"

type TaskListProps = {
    tasks: Task[]
    toggleTask: (id: number) => void
    deleteTask: (id: number) => void
}

function TaskList({ tasks, toggleTask, deleteTask }: TaskListProps) {
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
            ))}
        </ul>
    )
}

export default TaskList