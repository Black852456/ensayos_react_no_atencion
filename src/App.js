 import logo from './logo.svg';
import './App.css';


function calcular(e){
    e.preventDefault();
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    alert("La suma de los numeros es: "+(numero1+numero2));
}

function App() {
    return (
    <div>
      <form onSubmit={calcular}>
      <p>Ingrese el primer numero</p>
      <input type="number" id='numero1'/>
      <p>Ingrese el segundo Numero</p>
      <input type="number" id='numero2'/>
      <button type='submit'>Calcular</button>
      </form>
    </div>
  );
}





export default App;
