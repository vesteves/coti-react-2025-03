export const Task = ({ task, id, onRemoveTask }) => {
  return <div style={{
    display: "flex",
    justifyContent: 'space-between'
  }}>
    <div>{task}</div>
    <button
      style={{ color: 'red', fontSize: '20px' }}
      onClick={() => onRemoveTask(id)}
    >X</button>
  </div>
}

export default Task