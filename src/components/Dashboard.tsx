import type { JSX } from "react"
import type { Task } from "../types/types"

type DashboardProps = {
    tasks: Task[]
}

function Dashboard({ tasks }: DashboardProps):JSX.Element {

    const tasksCount = tasks.length
    const tasksDoneCount = tasks.filter(task => task.completed === true).length
    const ProgressCount = tasksCount > 0 ? Math.round((tasksDoneCount / tasksCount) * 100) : 0

    return (
        <div className="dashboard-container">
            <span>Total: {tasksCount}</span>
            <span>Done: {tasksDoneCount}</span>
            <span>Progress: {ProgressCount}%</span>
        </div>
    )
}

export default Dashboard