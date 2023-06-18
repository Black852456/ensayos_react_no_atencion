function FormularioSumar(props){
    return (
    <form onSubmit={props.onSumar}>
      <input type='number' name="valor1"/><br/>
      <input type='number' name="valor2"/><br/>
      <button type='submit'>Sumar</button>
    </form>
    );
}

export default FormularioSumar;