import type { Task } from '../types'
import TaskItem from "./TaskItem"

type TaskListProps = {
    tasks: Task[]
    toggleTask: (id: number) => void
}

function TaskList({ tasks, toggleTask }: TaskListProps) {
    return (
        <ul>
            {tasks.slice(0, 10).map(task => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
            ))}
        </ul>
    )
}

export default TaskList