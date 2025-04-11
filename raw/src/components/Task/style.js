import styled from '@emotion/styled'

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const RemoveTaskButton = styled.button`
  color: red;
  background-color: transparent;
  font-size: 20px;
`

export const TaskName = styled.div`
  color: ${props => props.color};
`
