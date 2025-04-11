import { useEffect, useState } from 'react'
import TaskContainer from '../TaskContainer'
import { useTasks } from '../../hooks/useTasks'
// import style from './index.module.css'
import * as S from './style'
// react hooks = gancho

export const Content = () => {
  const [item, setItem] = useState('')

  const { tasks, setTasks, removeTask } = useTasks()
  // const [] = useState()

  useEffect(() => {
    const result = localStorage.getItem('tasksStored')
    setTasks(JSON.parse(result))
  }, [])

  useEffect(() => {
    console.log('tasks', tasks)
  }, [tasks])

  const setItemToTask = () => {
    if (!item.trim()) return

    setTasks([
      ...tasks,
      item
    ])

    setItem('')
  }

  return <S.ContentContainer>
    <S.ContentForm>
      <S.TaskName
        type="text"
        placeholder="Digite sua tarefa"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && setItemToTask()}
      />
      <S.NewTaskButton onClick={() => setItemToTask()}>Criar</S.NewTaskButton>

      {tasks && tasks.map((task, index) =>
        <TaskContainer
          key={index}
          task={task}
          id={index}
          onRemoveTask={(id) => removeTask(id)}
        />
      )}
    </S.ContentForm>
  </S.ContentContainer>
}

export default Content
