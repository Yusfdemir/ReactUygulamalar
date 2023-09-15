import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate,useLocation } from 'react-router-dom'
import {useFormik,Formik,Form, Field} from 'formik'
import Input from "../../components/form/Input"
import { LoginSchema } from '../../validations'

const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const {setUser}=useAuth()
    // useFormik kullanımı
    // const {handleSubmit,handleChange,values}=useFormik({
    //   initialValues:{
    //     username:'',
    //     password:''
    //   },
    //   onSubmit: values=>{
    //     setUser(values)
    //     navigate(location?.state?.return_url || '/',{
    //       replace:true
    //     })
    //   }

    // })

    
  return (
    <div>
        Login Page <br />

        <Formik 
        initialValues={{
          username:'',
          password:''
        }} 
        onSubmit={(values,actions)=>{
          setUser(values)
          navigate(location?.state?.return_url || '/',{
            replace:true
          })
          /*setTimeout(() => {
            actions.setSubmitting(false)
            actions.resetForm()
          }, 3000);
          */
        }}
        validationSchema={LoginSchema}
        >
            {({ values,isSubmitting })=>(
              <Form className='grid gap-y-3 p-4'>
                <Input label="Kullanıcı Adı" name="username" /> <br />
                <Input label="Parola" name="password" type="password"/> <br />
                <button type='reset'>Formu Resetle</button>
                <button disabled={isSubmitting} className='bg-black text-sm text-white h-10 rounded disabled:opacity-40' type='submit'>Giriş Yap</button>
              </Form>
            )}
        </Formik>

        {/** useFormik Kullanımı */}
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="username">Kullanıcı Adı</label>
          <input type="text" id='username' value={values.username} onChange={handleChange}/>
          <br />
          <label htmlFor="password">Şifre</label>
          <input type="password" id='password' value={values.password} onChange={handleChange} />
          <br />
          <button type='submit'>Giriş Yap</button>
        </form> */}
    </div>
  )
}

export default Login