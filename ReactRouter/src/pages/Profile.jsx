import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Profile = () => {
    const {setUser,user}=useAuth()
    const logoutHandle=()=>{
        setUser(false)
    }
  return (
    <div>
        <Helmet>
          <title>Login</title>  
        </Helmet>
        Profile Page <br />
        {!user && <Link to="/auth/login">Giriş Yap</Link>}
        {user && <button onClick={logoutHandle}>Çıkış Yap</button>}

    </div>
  )
}

export default Profile