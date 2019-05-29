import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby'
import { Col, Layout, Row, Select } from 'antd'
import Helmet from 'react-helmet'
import Icon from '../images/sift-demos.svg'

const { Content } = Layout
const { Option } = Select

const IndexPage = ({ data }) => (
  <Layout
    className="layout"
    style={{ background: '#fff', display: 'flex', height: '100vh' }}
  >
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
            <Select
              showSearch
              style={{ width: '280px' }}
              placeholder="Select a person"
              onChange={slug => navigate(slug)}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {data.allAirtable.edges.map((edge, i) => {
                if (edge.node.table !== 'Demos' || !edge.node.data.slug) {
                  return null
                }

                return (
                  <Option key={i} value={edge.node.data.slug}>
                    {edge.node.data.customer}
                  </Option>
                )
              })}
            </Select>
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
