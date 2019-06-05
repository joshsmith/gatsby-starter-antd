/* eslint-disable no-undef */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { message, Avatar, Select } from 'antd'
import Code from './Code'

const { Option } = Select

const query = graphql`
  {
    allDataJson {
      edges {
        node {
          id
          name
          src {
            childImageSharp {
              fluid(maxWidth: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`

const avatarUrl = ({
  childImageSharp: {
    fluid: { src },
  },
}) => `https://sift-demos.netlify.com${src}`

const UserSelect = ({ primaryColor }) => (
  <StaticQuery
    query={query}
    render={data => {
      const {
        allDataJson: { edges },
      } = data

      const onSelect = option => {
        // Try to find an edge
        const edge = edges.find(({ node }) => node.id === option)

        if (edge) {
          // Get the node attributes
          const {
            node: { id, name, src },
          } = edge

          // Set the traits
          const traits = {
            name,
            avatar: avatarUrl(src),
          }

          if (Sift) {
            // Identify the user if we can
            Sift.identify(`${id}`, traits)
            message.success(
              <span>
                Called <Code color={primaryColor}>Sift.identify()</Code> for{' '}
                {name}
              </span>
            )
          }
        } else {
          if (Sift) {
            // Logout the user if we can and identify the anonymous user
            Sift.reset()
            message.success(`Reset the identified user`)
          }
        }
      }

      return (
        <Select
          allowClear
          autoFocus
          defaultOpen
          showSearch
          style={{ width: '180px' }}
          placeholder={
            <span>
              <code>identify</code>...
            </span>
          }
          onChange={onSelect}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children
              .toString()
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
        >
          {edges.map(({ node: { id, name, src } }) => [
            <Option key={id} value={id}>
              <Avatar size="small" src={src.childImageSharp.fluid.src} /> {name}
            </Option>,
          ])}
        </Select>
      )
    }}
  />
)

export default UserSelect
