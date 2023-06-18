function ListadoResultados(props){
    return (
        <ul>
            {
                props.resultados.map((elemento) =>
                    <li>Suma de {elemento.valor1} con {elemento.valor2} es {elemento.resultado}</li>
                )
            }
        </ul>
    );

}

export default ListadoResultados;