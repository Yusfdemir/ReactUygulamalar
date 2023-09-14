import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
        <h1>Sayfa bulunamadı</h1>
        <Link to="/">Anasayfaya Dön</Link>
    </div>
  )
}

export default Page404