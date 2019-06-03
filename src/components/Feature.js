/* eslint-disable no-undef, react/prop-types */
import React from 'react'
import { message, Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import StyledButton from './StyledButton'
import Code from './Code'

const copy = [
  'With Sift, you can ask for feedback when your users',
  'You can also get their thoughts when they',
  'And ask how happy they are whenever they',
]

const getIcon = (icon, iconType) => {
  const iconName = icon ? icon : 'bolt'
  const prefix = iconType ? iconType : 'far'
  return findIconDefinition({ prefix, iconName })
}

const Feature = ({
  data: { actionTaken, buttonText, event, icon, iconColor, iconType, name },
  index,
  primaryColor,
}) => {
  const handleTrack = event => {
    Sift && Sift.track(event)
    message.success(
      <span>
        Called <Code color={primaryColor}>Sift.track('{event}')</Code>
      </span>
    )
  }

  return (
    <Card
      title={
        <span style={{ whiteSpace: 'normal' }}>
          <span>
            <FontAwesomeIcon
              icon={getIcon(icon, iconType)}
              style={{
                color: iconColor || primaryColor,
                fontSize: '1.4em',
                marginRight: 10,
                verticalAlign: 'sub',
              }}
            />
          </span>
          <span>{name}</span>
        </span>
      }
    >
      <p>
        {`${copy[index]} `}
        <span>{actionTaken}</span>.
      </p>
      <p>
        <StyledButton
          color={primaryColor}
          type="primary"
          onClick={() => handleTrack(event)}
        >
          {buttonText}
        </StyledButton>
      </p>
      <p>
        Click to send <Code color={primaryColor}>{event}</Code> to Sift
      </p>
    </Card>
  )
}

export default Feature
