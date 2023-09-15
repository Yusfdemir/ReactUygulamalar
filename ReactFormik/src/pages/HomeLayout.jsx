import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { url } from '../utils'

const HomeLayout = () => {
  return (
    <>
        <nav>
            {/**NavLink  otomatik active classı ekliyor */}
            <NavLink to={url('home')} >Anasayfa</NavLink>
            <NavLink to={url('home.contact')}>İletişim</NavLink>
            <NavLink to={url('home.blog')}>Blog</NavLink>
            <NavLink to={url('home.profile')}>Profile</NavLink>
      </nav>
      <Outlet/>
    </>
  )
}

export default HomeLayout