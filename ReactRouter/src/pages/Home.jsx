import React from 'react'
import {Helmet} from 'react-helmet'
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Anasayfa</title>
        <meta name='description' content='anasayfa description'/>  
      </Helmet>  
      Home Page
    </div>
  )
}

export default Home