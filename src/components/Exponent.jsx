function Exponent(props) {

    const operacion = Math.pow(props.count, props.exponente)

    const operacionDetallada = Array.from({ length: props.exponente }, () => props.count).join(' * ');

  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}<sup>{props.exponente}</sup></p>
    <p className="exponent-result">{operacionDetallada} = <span className="total">{operacion}</span></p>
  </div>
  )
}

export default Exponent