import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container main">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
