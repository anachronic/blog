import React from 'react'

interface Props {
  siteTitle: string
  siteDescription?: string
}

const Header: React.FC<Props> = ({ siteTitle, siteDescription }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-title">{siteTitle}</div>
        {siteDescription && (
          <div className="header-subtitle">{siteDescription}</div>
        )}
      </div>
    </header>
  )
}

export default Header
