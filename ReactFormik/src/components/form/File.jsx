import {ErrorMessage, useField} from 'formik'
import {FiCheck} from 'react-icons/fi'
const File = ({label, ...props}) => {
    const [field,meta,helpers]=useField(props)

    async function fileOpen(){
       try{
        const [fileHandle]=await window.showOpenFilePicker();
        const file=await fileHandle.getFile()
        helpers.setValue(file)
       }catch(e){
        helpers.setValue('')
       }
    }
  return (
    <div className='block w-full'>
        <div className='text-sm text-gray-600 block mb-1.5'>{label}</div>       
        <button type='button' onClick={fileOpen} className='px-5 inline-flex items-center gap-x-2 text-sm rounded bg-blue-50 text-blue-500 h-10'> 
            {field.value && <>Dosya Seçildi <FiCheck size={15}/></>}
            {!field.value &&  'Dosya Seç'}
        </button>
        {field.value && <button onClick={()=>helpers.setValue('')} className='flex w-full text-sm underline text-gray-600 mt-2'>Dosyayı Kaldır</button>}
        <ErrorMessage name={field.name} component="small" className='text-xs block mt-2 text-red-600'/>
    </div>
  )
}

export default File