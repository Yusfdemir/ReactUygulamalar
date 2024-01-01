import React from 'react'
import { destroyModal } from '../../utils/modal'
const Header = ({title}) => {
  return (
    <header className='h-14 flex items-center justify-between px-4 border-b border-gray-300 text-sm font-medium'>
        <h6>{title}</h6>
        <button onClick={destroyModal} className='w-9 h-9 rounded hover:bg-gray-100 flex items-center justify-center'>X</button>
    </header>
  )
}

export default Header