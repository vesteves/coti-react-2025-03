import { createBrowserRouter } from "react-router-dom";
import TodoPage from '../pages/TodoPage'
import HomePage from '../pages/HomePage'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/todo-list',
    element: <TodoPage />
  },
])

export default routes