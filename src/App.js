 import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

    function eliminarUltimaFila(){
      if(articulos.length>0){
        const temp = Array.from(articulos);
        temp.pop();
        setArticulos(temp);
      }
    }

    const [articulos,setArticulos] = useState([
      {
        codigo:1,
        descripcion:"Cebolla",
        precio:12.45
      },
      {
        codigo:2,
        descripcion:"Zanahorias",
        precio:4.15
      },
      {
        codigo:3,
        descripcion:"Pimenton",
        precio:7.20
      }
    ]);

    return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descripcion</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            articulos.map(articulo =>
              <tr>
                <th>{articulo.codigo}</th>
                <th>{articulo.descripcion}</th>
                <th>{articulo.precio}</th>
              </tr>
            )
          }
        </tbody>

      </table>
      <button onClick={eliminarUltimaFila}>Eliminar</button>
    </div>
  );
}





export default App;
