import { useState } from 'react'

export const Content = () => {
  const [tasks, setTasks] = useState([])
  const [item, setItem] = useState('')

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
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        style={{
          color: 'white',
          background: 'gray'
        }}
        onClick={() => setItemToTask()}
      >Criar</button>
      {tasks && tasks.map((task, index) => <div key={index}>{task}</div>)}
    </div>
  </div>
}

export default Content
