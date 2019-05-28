import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button type="primary">
      <Link to="/page-2/">Go to page 2</Link>
    </Button>
  </div>
)

export default IndexPage
