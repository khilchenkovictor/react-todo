import { TasksContext } from "../context/TasksContext"
import ToDoItem from "./ToDoItem"
import { memo, useContext } from 'react'

const ToDoList = () => {

    const {
      tasks,
      filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0 

    if (!tasks.length) {
        return <div className="todo__empty-message">No Tasks</div>
    }

    if (hasTasks && isEmptyFilteredTasks) {
      return <div className="todo__empty-message">Tasks Not Found</div>
    }

    return (
      <ul className="todo__list">
        {(filteredTasks ?? tasks).map((task) => (
          <ToDoItem 
            className="todo__item"
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        ))}
      </ul>
    )
}

export default memo(ToDoList)