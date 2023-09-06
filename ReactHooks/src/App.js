
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Tab from './components/Tab';
import Lifecycle from './components/Lifecycle';
import Useref from './components/Useref';
import Usereducer from './components/Usereducer';


function App() {

  const[activeTab,setActiveTab]=useState(1)
  //lifecycle
  const [show,setShow]=useState(false)

  return (
    <>
      <div>
        <Button>Buton Örneği</Button>
        <Button variant="success">Buton Örneği</Button>
        <Button variant="danger">Buton Örneği</Button>
        <Button variant="warning">Buton Örneği</Button>
      </div>
    <br />
      <div>
        <button  onClick={()=>setActiveTab(2)}>Aftif Tabı Değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">1.panel</Tab.Panel>
          <Tab.Panel title="Hakkında">2.panel</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.panel</Tab.Panel>
        </Tab>
      </div>
      <br /><br /><hr />
      <div>
        <button className='bg-gray-100' onClick={()=>setShow(show => !show)}>
          {show ? "Gizle":"Göster"}
        </button>
        {show && <Lifecycle/>}
      </div>

      <br /><br /><hr />
      <Useref/>
      <br /><br /><hr />
      <div className='flex justify-center'>
        <Usereducer/>
      </div>
    </>
  );
}

export default App;
