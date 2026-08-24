function PlayerVHS() {
    return (
        <div className="vhsplayer">
            <div className="painel">
                <div className="energia">
                    <div className="power"></div>
                    <div className="ledstatus"></div>
                </div>
                <div className="entradafita">
                    <div className="portinhafita"></div>
                </div>
                <div className="display">00%</div>
                <div className="botoes">
                    <button className="btnvhs">{'<<<'}</button>
                    <button className="btnvhs">{'>>>'}</button>
                </div>
            </div>
        </div>
    )
}

export default PlayerVHS