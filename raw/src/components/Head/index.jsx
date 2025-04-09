import style from './index.module.css'
// import * as style from './style'

export const Head = ({
  titulo,
  background = 'https://placehold.co/600x400/ff5555/000000'
}) => {
  // template string ``
  // valor padrao para parametros de funcao

  return <header
    className={style.header}
    style={{ backgroundImage: `url(${background})` }}
  >
    <h1>{titulo}</h1>
  </header>
}

export default Head
