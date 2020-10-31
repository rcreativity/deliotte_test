import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'

export default function Li({value, index, icon}) {
  return (
    <li key={index}>
      <a href="#">
        {icon &&  <span style={{color:"#9aa0a6", marginRight: "20px"}}><FontAwesomeIcon icon={faSearch} /></span>} {value}
      </a>
      </li>
  )
}

