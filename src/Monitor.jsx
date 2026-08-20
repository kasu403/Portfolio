function Monitor({children}) {
    return (
        <div className="tvcompleta">
            <div className="antenastv">
                <div className="antenahaste esquerda"></div>
                <div className="antenahaste direita"></div>
                <div className="antenabase"></div>
            </div>
        <div className="monitorestilo">

            <div className="telacontainer">
            <div className="tela">
               {children}
               <div className="reflexo"></div>
            </div>
            </div>

            <div className="painelcontrole">
                <div className="botaodial"></div>
                <div className="botaodial"></div>
                <div className="adesivo"></div>
                <div className="ranhuratv">
                    <span></span>
                    <span></span>
                    <span></span>
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