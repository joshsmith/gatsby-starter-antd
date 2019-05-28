/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import {
  Avatar,
  Button,
  Card,
  Col,
  Icon,
  Layout,
  Row,
  Skeleton,
  Switch,
  Typography,
} from 'antd'
import styled from '@emotion/styled'
import { darken, lighten } from 'polished'
import Helmet from 'react-helmet'
import Favicon from 'react-favicon'

const { Content } = Layout
const { Text } = Typography

const StyledButton = styled(Button)`
  background-color: ${props => props.color};
  border-color: ${props => props.color};

  &:hover,
  &:focus {
    background-color: ${props => lighten(0.1, props.color)};
    border-color: ${props => lighten(0.1, props.color)};
  }

  &:active {
    background-color: ${props => darken(0.1, props.color)};
    border-color: ${props => darken(0.1, props.color)};
  }
`

const Menu = styled.ul`
  align-items: center;
  display: flex;
  list-style-type: none;
  margin: 0;

  li {
    margin-left: 2em;
  }
`

const MenuItem = styled.li`
  font-weight: 500;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalize')};
`

const defaultUser = {
  id: 1,
  name: 'Josh Smith',
  email: 'josh@hellosift.com',
}

const copy = [
  'With Sift, you can ask for feedback when your users',
  'You can also get get their opinion when they',
  'And ask how happy they are whenever they',
]

const Template = ({ data }) => {
  const {
    airtable: {
      data: {
        actionTaken,
        customer,
        favicon,
        features,
        logo,
        logoHeight,
        page1,
        page2,
        page3,
        primaryColor,
        publishableKey,
        slug,
        uppercase,
      },
    },
  } = data
  const [user, setUser] = useState(null)
  const [{ url: logoUrl }] = logo
  const faviconUrl = favicon && favicon.length > 0 && favicon[0].url

  const onChange = checked => {
    if (checked) {
      setUser(defaultUser)
      const { id, ...traits } = defaultUser
      if (Sift) {
        Sift.identify(`${id}`, traits)
      }
    } else {
      setUser(null)
    }
  }

  return (
    <Layout className="layout" style={{ background: '#fff' }}>
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
        <Row>
          <Col
            sm={24}
            md={12}
            style={{ display: 'flex', alignItems: 'center', height: '70px' }}
          >
            <Link to={`/${slug}`}>
              <img height={logoHeight || '60'} src={logoUrl} alt={customer} />
            </Link>
          </Col>
          <Col
            sm={24}
            md={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '70px',
              justifyContent: 'flex-end',
            }}
          >
            <Menu>
              <MenuItem uppercase={uppercase}>{page1}</MenuItem>
              <MenuItem uppercase={uppercase}>{page2}</MenuItem>
              <MenuItem uppercase={uppercase}>{page3}</MenuItem>
              {user ? (
                <li>
                  <Avatar
                    style={{ backgroundColor: primaryColor }}
                    icon="user"
                  />{' '}
                  {user.name}
                </li>
              ) : (
                <li>
                  <StyledButton color={primaryColor} type="primary">
                    <Link to={`/${slug}`}>Sign up for {customer}</Link>
                  </StyledButton>
                </li>
              )}
              <li>
                <Switch
                  checkedChildren={<Icon type="user" />}
                  unCheckedChildren={<Icon type="question" />}
                  onChange={onChange}
                />
              </li>
            </Menu>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Skeleton paragraph={{ rows: 3 }} />
          </Col>
          {features &&
            features.map(({ data: { buttonText, event, name } }, index) => [
              <Col key={index} span={8}>
                <Card
                  title={
                    <span style={{ whiteSpace: 'normal' }}>
                      <span>
                        <Icon
                          type="build"
                          theme="twoTone"
                          twoToneColor={primaryColor}
                          style={{ fontSize: '1.25em', marginRight: 10 }}
                        />
                      </span>
                      <span>{name}</span>
                    </span>
                  }
                >
                  <p>
                    {`${copy[index]} `}
                    <span style={{ textTransform: 'lowercase' }}>
                      {actionTaken}
                    </span>
                    .
                  </p>
                  <p>
                    <StyledButton
                      color={primaryColor}
                      type="primary"
                      onClick={() => Sift.track(event)}
                    >
                      {buttonText}
                    </StyledButton>
                  </p>
                  <p>
                    Click to send Sift the event <Text code>{event}</Text>
                  </p>
                </Card>
                <Skeleton paragraph={{ rows: 4 }} />
              </Col>,
            ])}
        </Row>
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    airtable(data: { slug: { eq: $slug } }) {
      data {
        actionTaken
        customer
        favicon {
          url
        }
        features {
          data {
            name
            buttonText
            event
          }
        }
        logo {
          url
        }
        logoHeight
        page1
        page2
        page3
        primaryColor
        publishableKey
        slug
        uppercase
      }
    }
  }
`

export default Template
