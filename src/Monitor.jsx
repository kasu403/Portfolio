function Monitor({children}) {
    return (
        <div className="monitorestilo">
            <div className="tela">
               {children}
               <div className="scanlines"></div>
            </div>
        </div>
    )
}

export default Monitor