import { useState } from 'react'
import TaskContainer from '../TaskContainer'
import { useTasks } from '../../hooks/useTasks'
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

  return <div style={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <div style={{
      background: 'white',
      width: '600px',
      borderRadius: '6px',
      textAlign: 'center'
    }}>
      <input
        type="text"
        placeholder="Digite sua tarefa"
        style={{
          marginRight: '10px'
        }}
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && setItemToTask()}
      />
      <button
        style={{
          color: 'white',
          background: 'gray'
        }}
        onClick={() => setItemToTask()}
      >Criar</button>
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
