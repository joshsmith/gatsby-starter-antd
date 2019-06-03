import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SmileIcon = ({ color }) => (
  <FontAwesomeIcon
    icon={{ prefix: 'fas', iconName: 'comment-alt-smile' }}
    style={{
      color,
      fontSize: '1.25em',
      marginRight: 7,
      verticalAlign: 'middle',
    }}
  />
)

export default SmileIcon
