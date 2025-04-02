import { useState } from 'react'
// react hooks = gancho

export const Content = () => {
  const [tasks, setTasks] = useState([])
  const [item, setItem] = useState('')
  // const [] = useState()

  // cria a funcao q vai receber o evento => cria o elemento que vai acionar o evento => tomo decisao com o evento ativado

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
      {item}
      <input
        type="text"
        placeholder="Digite sua tarefa"
        style={{
          marginRight: '10px'
        }}
        value={item}
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
