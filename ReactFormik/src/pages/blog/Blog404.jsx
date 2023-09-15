import React from 'react'
import { Link } from 'react-router-dom'
const Blog404 = () => {
  return (
    <div>
        <h1>Blog Sayfası Bulunamadı </h1>
        <Link to="/blog">Blog Sayfasına Dön</Link>
    </div>
  )
}

export default Blog404