import { createContext, useMemo } from 'react'
import useTasks from './useTasks'
import useIncompleteTaskScroll from './useIncompleteTaskScroll'

export const TasksContext = createContext({})

const TasksProvider = (props) => {
    const { children } = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)

    const value = useMemo(() => ({
        tasks,
        filteredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    }),     [
        tasks,
        filteredTasks,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    ])

    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}

export { TasksProvider }