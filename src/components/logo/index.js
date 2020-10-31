import React from 'react'

export default function Logo({link, altText}) {
  return (
    <div className="logo">
        <img src={link} alt={altText} />
    </div>
  )
}
