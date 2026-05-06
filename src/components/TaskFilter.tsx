import type { Filter } from "../types/types"

type TaskFilterProps = {
    filter: Filter
    setFilter: (filter: Filter) => void
}

const options: Filter[] = ["All", "Active", "Completed"]

function TaskFilter({ filter, setFilter }: TaskFilterProps) {
    return (
        <div>
            <label>Show Task:</label>
            {options.map(option => (
                <label>
                    <input 
                        type="radio" 
                        name="task-filter"
                        value="all"
                        checked={filter === option}
                        onChange={() => setFilter(option)}
                    />
                    {option}
                </label>
            ))}  
        </div>
    )
}

export default TaskFilter