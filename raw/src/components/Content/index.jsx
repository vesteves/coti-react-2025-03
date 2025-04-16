import { useEffect, useState } from 'react'
import TaskContainer from '../TaskContainer'
import { useTasks } from '../../hooks/useTasks'
// import style from './index.module.css'
import * as S from './style'
// react hooks = gancho

export const Content = () => {
  const [item, setItem] = useState('')

  const {
    tasks,
    removeTask,
    setItemToTask,
    storedTasksToJson,
    setTasks,
  } = useTasks()
  // const [] = useState()

  /*
   * este useEffect é responsável em rodar instruções no momento que
   * o componentente é montado
  */
  useEffect(() => {
    setTasks(storedTasksToJson())
  }, [setTasks])

  /*
   * este useEffect é responsável em observar o estado tasks
  */
  // useEffect(() => {
  //   console.log('tasks', tasks)
  // }, [tasks])

  return <S.ContentContainer>
    <S.ContentForm>
      <S.TaskName
        type="text"
        placeholder="Digite sua tarefa"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && setItemToTask(item, setItem)}
      />
      <S.NewTaskButton onClick={() => setItemToTask(item, setItem)}>Criar</S.NewTaskButton>

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
