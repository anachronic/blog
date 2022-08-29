import React from 'react'
import { Footer as LibFooter } from '../lib/footer'

export const Footer: React.FC = () => {
  return (
    <LibFooter>
      © 2020 - {new Date().getFullYear()}, Nicolás Salas V.
      <a href="https://github.com/anachronic">@anachronic</a>
    </LibFooter>
  )
}
