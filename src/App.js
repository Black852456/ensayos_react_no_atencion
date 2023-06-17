 import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
    function generarAleatorios(){
      const numeros = new Array(5);
      for (let i = 0; i < numeros.length; i++) {
        let numeroAleatorio = Math.trunc(Math.random()*10);  
        numeros[i] = numeroAleatorio;
      }
      setNumeros(numeros)
    }

    //Hooks son como variables que se pueden reasignar con una funcion como medio que puede tener un datos inicial
    // es parecido a un variable pero es mas como un objeto con un set y un constructor inicial en uno
    const [numeros,setNumeros] = useState([0,0,0,0,0]);

    return (
    <div>
      <p>numeroAleatorio : {numeros}</p>
      {
      numeros.map(num =>
        <p>{num}</p>
      )
      }
      <button onClick={generarAleatorios }>Cambio Valor</button>
    </div>
  );
}





export default App;
