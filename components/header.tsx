import React from 'react'
import { IoLogoGithub } from 'react-icons/io'
import Link from 'next/link'
import { Nav, NavLeft, NavRight, NavMiddle } from '../lib/nav'

export const Header: React.FC = () => {
  return (
    <Nav>
      <NavLeft>
        <Link href="/">
          <a className="item">Home</a>
        </Link>
      </NavLeft>{' '}
      <NavMiddle>
        <Link href="/articles">
          <a className="item">Articles</a>
        </Link>
        <Link href="/about">
          <a className="item">About</a>
        </Link>
        <Link href="/wiki">
          <a className="item">Wiki</a>
        </Link>
      </NavMiddle>
      <NavRight>
        <a href="https://github.com/anachronic/blog" className="item">
          <IoLogoGithub title="Github icon" size="1.4em" />
        </a>
      </NavRight>
    </Nav>
  )
}
