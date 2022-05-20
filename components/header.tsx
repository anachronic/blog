import React from 'react'
import { IoLogoGithub } from 'react-icons/io'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="navbar-top">
      <div className="lhs">
        <Link className="item" href="/">
          Home
        </Link>
      </div>
      <div className="middle">
        <Link className="item" href="/articles">
          Articles
        </Link>
        <Link className="item" href="/about">
          About
        </Link>
        <Link className="item" href="/wiki">
          Wiki
        </Link>
      </div>
      <div className="rhs">
        <a
          href="https://github.com/anachronic/blog"
          className="item"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <IoLogoGithub size="1.3rem" style={{ display: 'inline' }} />
        </a>
      </div>
    </header>
  )
}
