import style from './index.module.css'

export const Task = ({ task, id, onRemoveTask }) => {
  return <div className={style.container}>
    <div>{task}</div>
    <button
      onClick={() => onRemoveTask(id)}
    >X</button>
  </div>
}

export default Task