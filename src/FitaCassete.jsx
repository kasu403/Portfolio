function FitaCassete({ titulo, cor, inclinacao }) {
  return (
    <div className="lombadavhs"
    style={{transform: `rotate(${inclinacao}deg)`}}>
      <div className="etiquetalombada" style={{ borderLeft: `8px solid ${cor}` }}>
        <span className="textolombada">{titulo}</span>
      </div>
      <div className="detalhe"></div>
    </div>
  )
}

export default FitaCassete
