 import logo from './logo.svg';
import './App.css';
import Dado from './Dado'
import { useState } from 'react';


function App() {

    //let valor1 = Math.trunc(Math.random()*6)+1;
    let valor1 = Math.trunc(Math.random()*6)+1;
    let valor2 = Math.trunc(Math.random()*6)+1;
    let valor3 = Math.trunc(Math.random()*6)+1;

  function CambiarValor(){
    
    setValor(
      valor+1
    );
  }

    let [valor,setValor] = useState(0)

    return (
    <div>
      <Dado valor={valor}/>
      <button onClick={CambiarValor}>Cambio</button>
    </div>
  );
}





export default App;
