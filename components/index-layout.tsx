import React, { PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const IndexLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}
