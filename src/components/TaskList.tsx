import type { Task } from '../types'
import TaskItem from "./TaskItem"

type TaskListProps = {
    tasks: Task[]
}

function TaskList({ tasks }: TaskListProps) {
    return (
        <ul>
            {tasks.slice(0, 5).map(task => (
                <TaskItem task={task} />
            ))}
        </ul>
    )
}

export default TaskList