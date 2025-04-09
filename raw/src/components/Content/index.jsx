import { useState } from 'react'
import TaskContainer from '../TaskContainer'
import { useTasks } from '../../hooks/useTasks'
import style from './index.module.css'
// react hooks = gancho

export const Content = () => {
  const [item, setItem] = useState('')

  const { tasks, setTasks, removeTask } = useTasks()
  // const [] = useState()

  const setItemToTask = () => {
    setTasks([
      ...tasks,
      item
    ])

    setItem('')
  }

  return <div className={style.container}>
    <div className={style.content}>
      <input
        type="text"
        placeholder="Digite sua tarefa"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && setItemToTask()}
      />
      <button onClick={() => setItemToTask()}>Criar</button>
      {tasks && tasks.map((task, index) =>
        <TaskContainer
          key={index}
          task={task}
          id={index}
          onRemoveTask={(id) => removeTask(id)}
        />
      )}
    </div>
  </div>
}

export default Content
