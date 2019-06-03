/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react'
import { Badge, Button, Drawer, Icon } from 'antd'

const Debugger = ({ issues }) => {
  const [drawerVisible, setDrawerVisible] = useState(null)

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
