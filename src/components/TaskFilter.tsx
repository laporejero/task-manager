import type { Filter } from "../types/types"

type TaskFilterProps = {
    filter: Filter
    setFilter: (filter: Filter) => void
}

const options: Filter[] = ["All", "Active", "Completed"]

function TaskFilter({ filter, setFilter }: TaskFilterProps) {
    return (
        <form className="task-filter">
            <label>Show Tasks: </label>
            {options.map(option => (
                <label>
                    <input 
                        type="radio" 
                        className="option-btn"
                        name="task-filter"
                        value={option}
                        checked={filter === option}
                        onChange={() => setFilter(option)}
                    />
                    {option}
                </label>
            ))}  
        </form>
    )
}

export default TaskFilter