import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate,useLocation} from 'react-router-dom'
// Kullanıcı oturum açmış mı?
// Açmış ise children'ı return et
// Açmamış ise yönlendirme işlemi yap
const PrivateRoute = ({children}) => {
    const {user}=useAuth()
    const location=useLocation()
  return (
    <>
       { !user ? <Navigate to="/auth/login" replace={true} state={{return_url:location.pathname+location.search}} />:<>{children}</>
        }
    </>
  )
}
//replace={true} özelliğini kullanmazsak login sayfasında geri tuşuna basınca yine login sayfasına giriyo ama kullanırsak bir önceki sayfaya dönüyor
export default PrivateRoute