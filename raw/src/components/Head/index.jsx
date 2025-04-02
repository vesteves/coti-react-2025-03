export const Head = ({
  titulo,
  background = 'https://placehold.co/600x400/ff5555/000000'
}) => {
  // template string ``
  // valor padrao para parametros de funcao

  return <header style={{
    color: '#fff',
    textAlign: 'center',
    padding: '60px 0',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: '20px',
  }}>
    <h1>{titulo}</h1>
  </header>
}

export default Head
