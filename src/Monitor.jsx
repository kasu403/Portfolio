function Monitor({children}) {
    return (
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
                <div className="ranhuras tv">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
    )
}

export default Monitor