import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  color: #fff;
  text-align: center;
  padding: 60px 0;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  background-image: url(${props => props.imageUrl});
`

// OU

// export const HeaderContainer = styled.header({
//   color: '#fff',
//   textAlign: 'center',
//   padding: '60px 0',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   marginBottom: '20px',
// }, props => ({
//   backgroundImage: `url(${props.imageUrl})`,
// }))

export const Title = styled.h1``