import React from 'react'
import { IoLogoGithub } from 'react-icons/io'
import Link from 'next/link'

export const Header: React.FC = () => {
  return (
    <header className="navbar-top">
      <div className="lhs">
        <Link href="/">
          <a className="item">Home</a>
        </Link>
      </div>
      <div className="middle">
        <Link href="/articles">
          <a className="item">Articles</a>
        </Link>
        <Link href="/about">
          <a className="item">About</a>
        </Link>
        <Link href="/wiki">
          <a className="item">Wiki</a>
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
