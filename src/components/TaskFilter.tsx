import type { Filter } from "../types/types"

type TaskFilterProps = {
    filter: Filter
    setFilter: (filter: Filter) => void
}

function TaskFilter({ filter, setFilter }: TaskFilterProps) {
    return (
        <div>
            <label>Show Task:</label>
            <label>
                <input 
                    type="radio" 
                    name="task-filter"
                    value="all"
                    checked={filter === "all"}
                    onChange={() => setFilter("all")}
                />
                All
            </label>
            <label>
                <input 
                    type="radio"
                    name="task-filter"
                    value="active"
                    checked={filter === "active"}
                    onChange={() => setFilter("active")}
                />
                Active
            </label>
            <label>
                <input 
                    type="radio" 
                    name="task-filter"
                    value="completed"
                    checked={filter === "completed"}
                    onChange={() => setFilter("completed")}
                />
                Completed
            </label>
        </div>
    )
}

export default TaskFilter