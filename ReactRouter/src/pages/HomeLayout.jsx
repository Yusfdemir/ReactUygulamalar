import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { url } from '../utils'

const HomeLayout = () => {
  return (
    <>
        <nav>
            {/**NavLink  otomatik active classı ekliyor */}
            <NavLink to={url('home')} className={({isActive})=> isActive && 'aktif'}>Anasayfa</NavLink>
            <NavLink to={url('home.contact')} style={({isActive})=>({backgroundColor:isActive?'red':'transparent'})}>İletişim</NavLink>
            <NavLink to={url('home.blog')}>{({isActive})=>(
                <>
                Blog
                {isActive&&'(Aktif)'}
                </>
            )}</NavLink>
            <NavLink to={url('home.profile')}>Profile</NavLink>
      </nav>
      <Outlet/>
    </>
  )
}

export default HomeLayout