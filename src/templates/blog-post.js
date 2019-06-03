/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import { Col, Layout as AntLayout, Row, Skeleton } from 'antd'
import Helmet from 'react-helmet'
import Favicon from 'react-favicon'
import Layout from '../components/layout'
import Header from '../components/header'
import Debugger from '../components/Debugger'
import Feature from '../components/Feature'
import SmileIcon from '../components/SmileIcon'
import snippet from '../data/snippet'

const { Content } = AntLayout

const urlForFavicon = favicon => favicon && favicon.length > 0 && favicon[0].url

const Template = ({
  data: {
    airtable: {
      data: {
        customer,
        favicon,
        features,
        logo,
        logoHeight,
        pages,
        primaryColor,
        publishableKey,
        slug,
        uppercase,
      },
    },
  },
}) => {
  const faviconUrl = urlForFavicon(favicon)

  return (
    <Layout>
      <Helmet>
        <title>Sift Demo for {customer}</title>
        <script>{snippet(publishableKey)}</script>
      </Helmet>
      {faviconUrl && <Favicon url={[faviconUrl]} />}
      <Content style={{ padding: '0 50px' }}>
        <Header
          customer={customer}
          logo={logo}
          logoHeight={logoHeight}
          pages={pages}
          primaryColor={primaryColor}
          slug={slug}
          uppercase={uppercase}
        />
        <Row gutter={16}>
          <Col span={24}>
            <Skeleton paragraph={{ rows: 3 }} />
          </Col>
          <Col span={24} style={{ margin: '2em 0', textAlign: 'center' }}>
            <h2>
              <SmileIcon color={primaryColor} />
              Get feedback on {customer}'s features with Sift.
            </h2>
          </Col>
          {features &&
            features.map(({ data }, index) => [
              <Col key={index} span={8}>
                <Feature
                  data={data}
                  index={index}
                  primaryColor={primaryColor}
                />
                <Skeleton paragraph={{ rows: 4 }} />
              </Col>,
            ])}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Debugger publishableKey={publishableKey} />
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    airtable(data: { slug: { eq: $slug } }) {
      data {
        customer
        favicon {
          url
        }
        features {
          data {
            actionTaken
            buttonText
            event
            iconType
            icon
            name
          }
        }
        logo {
          url
        }
        logoHeight
        pages
        primaryColor
        publishableKey
        slug
        uppercase
      }
    }
  }
`

export default Template
