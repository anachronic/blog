import React, { PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
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
