import modalData from '../modal.js'
import { useModals,destroyModal } from '../utils/modal.js'

const Modal = () => {
  const modals=useModals()
  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
      {modals.map((modal,index)=>{
        const m=modalData.find(m=>m.name == modal.name)
        return <div key={index} className='hidden last:block bg-white shadow-lg rounded'>
            <m.element data={modal.data} close={destroyModal}/>
        </div>
      })}
    </div>
  )
}

export default Modal