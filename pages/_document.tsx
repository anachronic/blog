import { Html, Head, Main, NextScript } from 'next/document'
import { Body } from '../lib/body'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  a {
    text-decoration: none;
    color: #3273dc;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export default function Document() {
  return (
    <Html>
      <Head />

      <Global styles={globalStyles} />

      <Body>
        <Main />
        <NextScript />
      </Body>
    </Html>
  )
}
