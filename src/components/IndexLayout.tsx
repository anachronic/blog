import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const IndexLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
