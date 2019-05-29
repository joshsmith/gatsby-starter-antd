/* eslint-disable no-undef */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Col, Icon, Row, Switch } from 'antd'
import styled from '@emotion/styled'
import { darken } from 'polished'
import UserSelect from './user-select'

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

const Header = ({
  customer,
  logo,
  logoHeight,
  pages,
  primaryColor,
  slug,
  uppercase,
}) => {
  const [userSelectVisible, setUserSelectVisible] = useState(false)
  const [{ url: logoUrl }] = logo

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
          {pages &&
            pages.map(page => [
              <MenuItem key={page} uppercase={uppercase}>
                <Link
                  to={`/${slug}/${page}`}
                  style={{ color: primaryColor }}
                  activeStyle={{ color: darken(0.1, primaryColor) }}
                >
                  {page}
                </Link>
              </MenuItem>,
            ])}
          {userSelectVisible && (
            <li>
              <UserSelect primaryColor={primaryColor} />
            </li>
          )}
          <li>
            <Switch
              checkedChildren={<Icon type="user" />}
              unCheckedChildren={<Icon type="question" />}
              onChange={() => setUserSelectVisible(!userSelectVisible)}
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
