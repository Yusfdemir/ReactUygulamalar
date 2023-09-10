import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useAuth } from './context'

const Home = () => {
    const {user}=useAuth()
  return (
    <>
        <Header/>
        Home
        {user && <div style={{padding:10,border:'1px solid red'}}>Bu alan sadece giriş yapılınca görünür</div>}
        <Footer/>
    </>
  )
}

export default Home