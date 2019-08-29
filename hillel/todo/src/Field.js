import React from 'react'
export  default function Field ({value, name, error, onChange}) {

  return <div>
    <label htmlFor="name"></label>
    <input
      value={value}
      name={name}
      id={name}
      onChange={onChange}
      type="text"/>
    <p>{error}</p>
  </div>
}
