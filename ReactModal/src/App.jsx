import { useState } from 'react'
import { createModal,useModals,destroyModal,destroyAllModal } from './utils/modal'
import Modal from './modals';

function App() {
  const modals=useModals();
  return (
    <div>
      {modals.length>0 && <Modal/>}
      <button onClick={()=>{
        createModal('login')
      }}>
        Modal'ı Aç
      </button>
    </div>
  )
}

export default App
