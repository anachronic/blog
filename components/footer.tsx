import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()}, Nicolás Salas V.
      <a href="https://github.com/anachronic">@anachronic</a>
    </footer>
  )
}
