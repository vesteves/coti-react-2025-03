import Head from '../../components/Head'
import Content from '../../components/Content'
import Footer from '../../components/Footer'

import * as S from './style'

function TodoPage() {
  return (
    <S.MainContainer>
      <Head titulo="Eu sou Head e vim pela PROPS" background="https://reacttodo-coti.vercel.app/assets/banner-DVDpP2rH.jpg" />
      <Content />
      <Footer />
    </S.MainContainer>
  )
}

export default TodoPage
