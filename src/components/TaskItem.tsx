import type { Task } from "../types"

type TasksItemProps = {
    task: Task
}

function TaskItem({task}: TasksItemProps) {
    return (
        <li key={task.id}>{task.title}</li>
    )
}

export default TaskItem