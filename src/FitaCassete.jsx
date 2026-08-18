function FitaCassete({ titulo, cor }) {
  return (
    <div className="lombadavhs">
      <div className="etiquetalombada" style={{ borderLeft: `8px solid ${cor}` }}>
        <span className="textolombada">{titulo}</span>
      </div>
      <div className="detalhe"></div>
    </div>
  )
}

export default FitaCassete
