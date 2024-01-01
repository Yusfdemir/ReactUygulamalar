import React from 'react'
import Header from './components/header'

const registerModal = ({data,close}) => {
  return (
    <div className='w-[700px]'>
        <Header title="Kayıt Ol"/>
        <div className='p-4'>
            {data.name} <br />
            {data.surname}<br/>
            <button onClick={()=>{
                data.setSearch("yeni search kelimesi")
                close()
            }}>Search Güncelle</button>
        </div>
    </div>
  )
}

export default registerModal