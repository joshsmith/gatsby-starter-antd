import React from 'react'
import { navigate } from 'gatsby'
import { Select } from 'antd'

const { Option } = Select

const DemoSelect = ({ data }) => (
  <Select
    showSearch
    style={{ width: '280px' }}
    placeholder="Select a customer"
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

      const favicon = edge.node.data.favicon
      const faviconUrl = favicon && favicon.length > 0 && favicon[0].url

      return (
        <Option key={i} value={edge.node.data.slug}>
          {faviconUrl && (
            <img
              src={faviconUrl}
              alt=""
              width="16"
              style={{ marginRight: '5px', verticalAlign: 'sub' }}
            />
          )}
          {edge.node.data.customer}
        </Option>
      )
    })}
  </Select>
)

export default DemoSelect
