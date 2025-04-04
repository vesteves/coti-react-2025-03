import { useState } from "react"

export const useTasks = () => {
  const [tasks, setTasks] = useState([])

  const removeTask = (id) => {
    const tasksTemp = tasks.filter((_task, index) => index !== id)
    setTasks(tasksTemp)
  }

  return {
    tasks,
    setTasks,
    removeTask,
  }
}

export default useTasks