
import {siteContext,useSite} from "./context"

const SwitchLanguage = () => {
    const {language,setLanguage}=useSite()
  return (
    <>
        Mevcut dil = {language} <br />
        <button onClick={()=>setLanguage(language=='tr'?'en':'tr')}>Dili Değiştir</button>
    </>
  )
}

export default SwitchLanguage