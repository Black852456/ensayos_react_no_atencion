 import logo from './logo.svg';
import './App.css';
import ListadoResultados from './ListadoResultados'
import FormularioSumar from './FormularioSumar'
import { useState } from 'react';


function App() {

    const [operaciones,setOperacion] = useState([]); 

    function sumar(event){
      event.preventDefault();
      const v1 = parseInt(event.target.valor1.value);
      const v2 = parseInt(event.target.valor2.value);
      const nuevoElemento = [{
        valor1:v1,
        valor2:v2,
        resultado:(v1+v2)
      }];

      setOperacion(
        [...operaciones,...nuevoElemento]
      );
      event.target.valor1.value = '';
      event.target.valor2.value = '';
      
    }

    return (
    <div>
      <FormularioSumar onSumar={sumar}/>
      <ListadoResultados resultados={operaciones}/>
    </div>
  );
}





export default App;
