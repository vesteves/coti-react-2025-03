import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  background-image: url(${props => props.imageUrl});
  height: 200px;
  text-align: center;
  color: #fff;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

// OU

// export const HeaderContainer = styled.header({
//   height: '200px',
//   textAlign: 'center',
//   color: '#fff',
//   backgroundSize: 'cover',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }, props => ({
//   backgroundImage: `url(${props.imageUrl})`,
// }))

export const Title = styled.h1`
  font-size: 48px;
`