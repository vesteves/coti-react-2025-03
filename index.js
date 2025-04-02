// const alunos = ['Gabi', 'Ana', 'Rafa', 'Jão']


// const meusDados = () => {
//     // return alunos.reverse() reverso
//     // return alunos.length quantidade
//     // return alunos puro

//     return [
//         alunos.slice().reverse(), // reverso
//         alunos.length, // quantidade
//         alunos // puro
//     ]
// }

// // const [
// //     reverso,
// //     quantidade,
// //     puro
// // ] = meusDados()

// const resultado = meusDados()
// const reverso = resultado[0]
// const quantidade = resultado[1]
// const puro = resultado[2]

// // console.log(reverso)


// const identidade = {
//     nome: "Vitor",
//     idade: 38,
//     data: '07/04/1986'
// }

// const { nome, idade } = identidade
// // const nome = identidade.nome
// // const idade = identidade.idade
// console.log(nome)






const alunos = [{
    nome: 'Jorge',
    idade: 40,
    estado: 'RJ'
},
{
    nome: 'Maria',
    idade: 20,
    estado: 'RJ'
},
{
    nome: 'Marcos',
    idade: 15,
    estado: 'SP'
}]


const meuteste = (estado = 'SP') => {
    return alunos.filter(aluno => aluno.estado === estado)
}

const useAlunos = () => {
    return [
        alunos,
        (onomeqeuquiser) => meuteste(onomeqeuquiser),
        alunos.reduce((acc, aluno) => acc + aluno.idade, 0) / alunos.length
    ]
}

// funcao q retorne:
// listagem dos alunos
// funcao que retorne os alunos que moram em um estado especifico
// a media de idade dos alunos

const [alunosLista, alunosPorEstado, media] = useAlunos()
// const alunosLista = useAlunos()[0]
// const alunosPorEstado = useAlunos()[1]
// const media = useAlunos()[2]

console.log('lista de alunos', alunosLista)
console.log('alunos por estado', alunosPorEstado())
console.log('média das idades', media)


