import React from 'react'
import './serch-box.styles.css'

export const SerchBox = ({placeholder, handlechange}) => (

  <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handlechange}
  />

);
