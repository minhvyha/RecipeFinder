import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/blue-abstract-logo-vector.jpg'

const Nav = () => {
  return (
    <div>Nav <Image src={logo} alt='' /></div>
  )
}

export default Nav