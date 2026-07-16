import TasksPage from '@/pages/TasksPage'
import TaskPage from '@/pages/TaskPage'
import Router from '@/app/routing'
import '@/app/styles'

const App = () => {

  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <div>Task not found</div>
  } 

  return (
    <Router routes={routes} />
  )
}

export default App
