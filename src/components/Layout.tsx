import React from 'react'
import { Navbar } from './Navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}
