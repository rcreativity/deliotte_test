import React from 'react'

export default function Input({onFocus, onBlur}) {
  return (
    <input type="text" id="input" onFocus={onFocus} onBlur={onBlur} />
  )
}
