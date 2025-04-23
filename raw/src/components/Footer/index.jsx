import { NavLink, useHref } from "react-router-dom";
import * as S from './style'

// JS-to-CSS
const Footer = () => {
  const url = useHref()

  return <S.FooterContainer>
    {url !== '/' && <NavLink to="/">Voltar</NavLink>}
    Projeto by Coti Informática
  </S.FooterContainer>
}

export default Footer
