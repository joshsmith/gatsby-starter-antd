/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react'
import { graphql, Link } from 'gatsby';
import { Button, Card, Col, Icon, Layout, Row, Skeleton, Typography } from 'antd'
import styled from '@emotion/styled';
import { darken, lighten } from 'polished'

const { Content } = Layout
const { Text } = Typography

const StyledButton = styled(Button)`
  background-color: ${props => props.color};
  border-color: ${props => props.color};

  &:hover, &:focus {
    background-color: ${props => lighten(0.1, props.color)};
    border-color: ${props => lighten(0.1, props.color)};
  }

  &:active {
    background-color: ${props => darken(0.1, props.color)};
    border-color: ${props => darken(0.1, props.color)};
  }
`

const Menu = styled.ul`
  font-weight: 500;
  list-style-type: none;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  li {
    margin-left: 2em;
  }
`

const Template = ({ data }) => {
  const { airtable: { data: { customer, features, logo, logoHeight, page1, page2, page3, primaryColor, slug } } } = data
  const logoUrl = logo[0].url;
  return <Layout className="layout" style={{ background: '#fff' }}>
      <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col sm={24} md={12} style={{ display: 'flex', alignItems: 'center', height: '70px' }}>
            <Link to={`/${slug}`}>
              <img height={logoHeight || 70} src={logoUrl} alt={customer} />
            </Link>
          </Col>
          <Col sm={24} md={12} style={{ display: 'flex', alignItems: 'center', height: '70px', justifyContent: 'flex-end' }}>
            <Menu>
              <li>{page1}</li>
              <li>{page2}</li>
              <li>{page3}</li>
              <li>
                <StyledButton color={primaryColor} type="primary">
                  <Link to={`/${slug}`}>Sign up for {customer}</Link>
                </StyledButton>
              </li>
            </Menu>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Skeleton paragraph={{ rows: 3 }} />
          </Col>
          {features && features.map(({ data: { buttonText, event, name } }, index) => [
            <Col span={8}>
              <Card
                title={
                  <span style={{ whiteSpace: 'normal' }}>
                  <span>
                    <Icon
                      type="build"
                      theme="twoTone"
                      twoToneColor={primaryColor}
                      style={{ fontSize: '1.25em', marginRight: 10 }}
                    /></span>
                    <span>{name}</span>
                  </span>
                }
              >
                <p>
                  Ask for feedback when your users{' '}
                  <span style={{ textTransform: 'lowercase' }}>
                    {buttonText}
                  </span>
                  .
                </p>
                <p>
                  <StyledButton color={primaryColor} type="primary">
                    <Link to={`/${slug}`}>{buttonText}</Link>
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
}

export const pageQuery = graphql`
         query BlogPostByPath($slug: String!) {
           airtable(data: { slug: { eq: $slug } }) {
             data {
               customer
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
               slug
             }
           }
         }
       `

export default Template
