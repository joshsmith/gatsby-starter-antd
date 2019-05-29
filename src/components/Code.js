import React from 'react'
import styled from '@emotion/styled'
import { darken, lighten } from 'polished'

const StyledCode = styled.span`
  margin: 0 0.2em;
  padding: 0.2em 0.4em 0.1em;
  font-size: 85%;
  color: ${props => darken(0.2, props.color)};
  background: ${props => lighten(0.6, props.color)};
  border: 1px solid ${props => lighten(0.4, props.color)};
  border-radius: 3px;
`

const Code = ({ color, children }) => {
  return (
    <StyledCode color={color}>
      <code>{children}</code>
    </StyledCode>
  )
}
export default Code
