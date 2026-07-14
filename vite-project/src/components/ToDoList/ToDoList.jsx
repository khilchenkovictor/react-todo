import { TasksContext } from "../../context/TasksContext"
import ToDoItem from "../ToDoItem/ToDoItem"
import { memo, useContext } from 'react'

const ToDoList = (props) => {

  const { styles } = props

    const {
      tasks,
      filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0 

    if (!tasks.length) {
        return <div className={styles.emptyMessage}>No Tasks</div>
    }

    if (hasTasks && isEmptyFilteredTasks) {
      return <div className={styles.emptyMessage}>Tasks Not Found</div>
    }

    return (
      <ul className={styles.list}>
        {(filteredTasks ?? tasks).map((task) => (
          <ToDoItem 
            className={styles.item}
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