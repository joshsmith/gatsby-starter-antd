/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Avatar, Col, Icon, Row, Switch } from 'antd'
import styled from '@emotion/styled'
import StyledButton from './StyledButton'

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

const Header = ({
  customer,
  logo,
  logoHeight,
  page1,
  page2,
  page3,
  primaryColor,
  slug,
  uppercase,
}) => {
  const [user, setUser] = useState(null)
  const [{ url: logoUrl }] = logo

  const onSwitchChange = checked => {
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
              <Avatar style={{ backgroundColor: primaryColor }} icon="user" />{' '}
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
              onChange={onSwitchChange}
            />
          </li>
        </Menu>
      </Col>
    </Row>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
