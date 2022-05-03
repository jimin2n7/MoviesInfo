import React from 'react'
import { Link } from 'react-scroll/modules'

const MenuItem = ({name, Icon, to}) => {
  return (
    <li>
      <Link activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-70}
            duration={500}
        >
        <Icon/>
        <span>{name}</span>
      </Link>
    </li>
  )
}

export default MenuItem