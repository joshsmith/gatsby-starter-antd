import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Col, Layout as AntLayout, Row } from 'antd'
import Helmet from 'react-helmet'
import Icon from '../images/sift-demos.svg'
import DemoSelect from '../components/DemoSelect'

const { Content } = AntLayout

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Sift Demos</title>
    </Helmet>
    <Content style={{ padding: '0 1em' }}>
      <Row style={{ height: '100%' }}>
        <Col
          sm={24}
          style={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '4em' }}>
            <Icon />
            <h1 style={{ fontSize: '2em' }}>Sift Demos</h1>
            <DemoSelect data={data} />
          </div>
        </Col>
      </Row>
    </Content>
  </Layout>
)

export const query = graphql`
  {
    allAirtable {
      edges {
        node {
          table
          data {
            customer
            favicon {
              url
            }
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
