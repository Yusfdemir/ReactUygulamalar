import React,{memo} from 'react'

const Header = () => {
    console.log("header render")
  return (
    <header>Header component</header>
  )
}

export default memo(Header)