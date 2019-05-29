import { Button } from 'antd'
import styled from '@emotion/styled'
import { darken, lighten } from 'polished'

const StyledButton = styled(Button)`
  background-color: ${props => props.color};
  border-color: ${props => props.color};

  &:hover,
  &:focus {
    background-color: ${props => lighten(0.1, props.color)};
    border-color: ${props => lighten(0.1, props.color)};
  }

  &:active {
    background-color: ${props => darken(0.1, props.color)};
    border-color: ${props => darken(0.1, props.color)};
  }
`

export default StyledButton
