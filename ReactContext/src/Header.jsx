import React from 'react'
import SwitchTheme from './SwitchTheme'
import SwitchLanguage from './SwitchLanguage'
import { useAuth } from './context'

const Header = () => {
    const {user,setUser}=useAuth()
    const login=()=>{
        setUser({
            name:"tayfun",
            id:1
        })
    }
    const logout=()=>{
        setUser(false)
    }
  return (
    <header>
        HEADER <br />
        {user && <button onClick={logout}>Çıkış Yap</button> || <button onClick={login}>Giriş Yap</button>}
        <hr />
        <SwitchTheme/>
        <br />
        <SwitchLanguage/>
    </header>
  )
}

export default Header