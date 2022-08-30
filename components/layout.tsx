import React, { PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import styled from '@emotion/styled'
import { Container } from '../lib/container'


const MainContainer = styled(Container)`
  margin-top: 1rem;
  font-size: 1.5em;
`

export const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />

      <MainContainer>
        <main>{children}</main>
      </MainContainer>

      <Footer />
    </>
  )
}
