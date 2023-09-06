import Test from "./Test";
import sytles from './App.module.css'; // styles obje olarak gelir
import { Title } from "./Component";
import Bootstrap from "./Bootstrap";
import Tailwind from "./Tailwind";
import './style.scss'

function App() {
  return (
    <div className={sytles.App}>
      <h1>React styling</h1>
       <hr />
       <Test/>
      <hr />
      <Title>Styled component export const Title şeklinde</Title>
      <Title theme="dark">Styled component export const Title şeklinde dark theme</Title>
      <hr />
      <Bootstrap/>
      <hr />
      <Tailwind/>
      <hr />
      <p className="scss">
        <span className="scssin">scss ile style</span>
      </p>
    </div>
  );
}

export default App;
