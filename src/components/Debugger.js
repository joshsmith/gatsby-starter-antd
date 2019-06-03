/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import { Badge, Button, Drawer, Icon } from 'antd'

const Debugger = ({ publishableKey }) => {
  const [drawerVisible, setDrawerVisible] = useState(null)

  let issues = []
  if (!publishableKey)
    issues.push({ message: 'The publishable key was not set on Airtable.' })

  return (
    <Fragment>
      <Badge count={issues.length}>
        <Button onClick={() => setDrawerVisible(!drawerVisible)}>
          <Icon type="code" />
        </Button>
      </Badge>
      <Drawer
        title={
          <span>
            <Icon type="code" /> Debugger
          </span>
        }
        placement="right"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        <ol>
          {issues &&
            issues.map(({ message }, index) => [
              <li key={index}>{message}</li>,
            ])}
        </ol>
      </Drawer>
    </Fragment>
  )
}

export default Debugger
