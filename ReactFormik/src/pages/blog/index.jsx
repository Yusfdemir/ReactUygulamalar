import React from 'react'
import {Outlet} from 'react-router-dom'

const BlogLayout = () => {
  return (
    <div>
      <h3>Blog Page</h3>
      <Outlet/>
    </div>
  )
}

export default BlogLayout