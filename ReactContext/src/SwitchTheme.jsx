
import {siteContext,useSite} from "./context"

const SwitchTheme = () => {
  const {theme,setTheme}=useSite()
  return (
    <>
        Mevcut tema = {theme} <br />
        <button onClick={()=>setTheme(theme=='light'?'dark':'light')}>Temayı Değiştir</button>
    </>
  )
}

export default SwitchTheme