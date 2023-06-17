 import logo from './logo.svg';
import './App.css';

function App() {
  const siglo = 21;
  const persona = {
    nombre:"cualquiera",
    edad:"300"
  }
  const paginas = [
    "http://www.google.com",
    "http://www.youtube.com",
    "http://www.lectormanga.com"
  ];

  return (
    <div>
    <h1>Contenido de las variables</h1>
    <h2>{siglo}</h2>
    <p>{persona.nombre}</p>
    <p>{persona.edad}</p>
    <p>{retornarNumeroAleatorio()}</p>
    <a _blank href={paginas[0]}>Google</a>
    <p>Contenido titulo = {mostrarTitulo("Nuevo Contenido")}</p>
    </div>
  );
}

function retornarNumeroAleatorio(){
  return Math.trunc(Math.random*10);
}

function mostrarTitulo(titulo){
  return titulo;
}

export default App;
