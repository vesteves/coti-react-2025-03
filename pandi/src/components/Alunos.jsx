'use client'

import { useState } from 'react'

export const Alunos = () => {
  const [alunos, setAlunos] = useState([])

  return <>
    <ul>
      {alunos && alunos.map(aluno => {
        return <li key={aluno}>{aluno}</li>
      })}
    </ul>
    <button onClick={() => setAlunos(['Rafa', 'Gabi', 'Ana', 'João'])}>Clique aqui para popular alunos</button>
  </>
}