import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate,useLocation } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const {setUser}=useAuth()

    const loginHandle=()=>{
        setUser({
            id:1,
            userName:'Yusuf'
        })
        navigate(location?.state?.return_url || '/')
    }
  return (
    <div>
        Login Page <br />
        <button onClick={loginHandle}>Giriş Yap</button>
    </div>
  )
}

export default Login