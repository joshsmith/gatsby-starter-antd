/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React, { useState } from 'react'
import { graphql } from 'gatsby'
import {
  message,
  Badge,
  Button,
  Card,
  Col,
  Drawer,
  Layout as AntLayout,
  Icon,
  Row,
  Skeleton,
} from 'antd'
import Helmet from 'react-helmet'
import Favicon from 'react-favicon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import Layout from '../components/Layout'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import Code from '../components/Code'

const { Content } = AntLayout

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

const Template = ({ data }) => {
  const {
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
  } = data
  const faviconUrl = favicon && favicon.length > 0 && favicon[0].url

  let issues = []
  if (!publishableKey)
    issues.push({ message: 'The publishable key was not set on Airtable.' })

  const [drawerVisible, setDrawerVisible] = useState(null)

  const handleTrack = event => {
    Sift && Sift.track(event)
    message.success(
      <span>
        Called <Code color={primaryColor}>Sift.track('{event}')</Code>
      </span>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>Sift Demo for {customer}</title>
        <script>
          {`
          (function(){var Sift=window.Sift=window.Sift||[];if(Sift.initialized)return;if(Sift.invoked){window.console&&console.error&&console.error("Sift snippet included twice.");return}Sift.invoked=true;Sift.methods=["page","identify","on"];Sift.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);Sift.push(args);return Sift}};for(var i=0;i<Sift.methods.length;i++){var key=Sift.methods[i];Sift[key]=Sift.factory(key)}Sift.load=function(publishableKey){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://widget.uryybfvsg.com/widget.js";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);Sift.PUBLISHABLE_KEY=publishableKey};Sift.SNIPPET_VERSION="0.0.1";
          Sift.load("${publishableKey}");
          })();
        `}
        </script>
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
            <div style={{ margin: '2em 0', textAlign: 'center' }}>
              <h2>
                <FontAwesomeIcon
                  icon={{ prefix: 'fas', iconName: 'comment-alt-smile' }}
                  style={{
                    color: primaryColor,
                    fontSize: '1.25em',
                    marginRight: 7,
                    verticalAlign: 'middle',
                  }}
                />
                Get feedback on {customer}'s features with Sift.
              </h2>
            </div>
          </Col>
          {features &&
            features.map(
              (
                {
                  data: {
                    actionTaken,
                    buttonText,
                    event,
                    icon,
                    iconColor,
                    iconType,
                    name,
                  },
                },
                index
              ) => [
                <Col key={index} span={8}>
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
                      Click to send <Code color={primaryColor}>{event}</Code> to
                      Sift
                    </p>
                  </Card>
                  <Skeleton paragraph={{ rows: 4 }} />
                </Col>,
              ]
            )}
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
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
