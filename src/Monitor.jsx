function Monitor({children}) {
    return (
        <div className="tvcompleta">
            <div className="antenastv">
                <div className="antenaesquerda"></div>
                <div className="antenadireita"></div>
                <div className="antenabase"></div>
            </div>
        <div className="monitorestilo">

            <div className="telacontainer">
            <div className="tela">
               {children}
               <div className="scanlines"></div>
            </div>
            </div>

            <div className="painelcontrole">
                <div className="botaodial"></div>
                <div className="botaodial"></div>
                <div className="ranhuratv">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Monitor