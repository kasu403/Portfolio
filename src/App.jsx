import { useState } from 'react'
import './App.css'
import Monitor from './Monitor'
import PlayerVHS from './PlayerVHS'
import FitaCassete from './FitaCassete'
function App() {
    const [fitaAtiva, setFitaAtiva] = useState('desligado')
    const [tvLigada, setTvLigada] = useState(false)
      const selecionarFita = (nomeFita) => {
    if (tvLigada) {
      setFitaAtiva('desligado')
      setTimeout(() => setFitaAtiva(nomeFita), 50);
    }
  }

    return (
       <div className='cenario'>
        <div className='estante'>
         <div onClick={() => selecionarFita('sobre')}>
          <FitaCassete titulo="01_SOBRE_MIM.vhs" cor="#4a75a0" inclinacao={4} />
        </div>
        <div onClick={() => selecionarFita('projetos')}>
          <FitaCassete titulo="02_PROJETOS.vhs" cor="#2ed573" inclinacao={2} />
        </div>
        <div onClick={() => selecionarFita('tecnologias')}>
          <FitaCassete titulo="03_TECNOLOGIAS.vhs" cor="#ffa502" inclinacao={1} />
        </div>
        <div onClick={() => selecionarFita('certificados')}>
          <FitaCassete titulo="04_CERTIFICADOS.vhs" cor="#1e3799" inclinacao={3}/>
        </div>
        <div onClick={() => selecionarFita('esteprojeto')}>
        <FitaCassete titulo="05_ESTE_PROJETO.vhs" cor="#574b90" inclinacao={4}/>
        </div>
        <div onClick={() => selecionarFita('contato')}>
          <FitaCassete titulo="06_CONTATO.vhs" cor="#ff4757" inclinacao={5} />
        </div>
        </div>



        <div className='televisao'>
          <Monitor tvLigada={tvLigada} setTvLigada={setTvLigada}>
            {!tvLigada ? (
              <div className="telapretatotal"></div>
            ) : fitaAtiva === 'desligado' ? (
              <div className="conteudovhstela animacaocrtligar">
                <div className="avisoinserir">
                  <h2>SEM SINAL</h2>
                  <p>POR FAVOR, INSIRA UMA FITA!!</p>
                </div>
              </div>
            ) : (
              <div className="conteudovhstela animacaocrtligar">
                {fitaAtiva === 'sobre' && (
                  <>
                    <h2>PLAY // PROG_01</h2>
                    <h3>SOBRE MIM</h3>
                    <p>Olá! Sou desenvolvedora</p>
                  </>
                )}
                {fitaAtiva === 'projetos' && (
                  <>
                    <h2> PLAY // PROG_02</h2>
                    <h3>MEUS PROJETOS</h3>
                    <p>Cards dos projetos aqui...</p>
                  </>
                )}
                {fitaAtiva === 'tecnologias' && (
                    <>
                    <h2>PLAY // PROG_03</h2>
                    <h3>TECNOLOGIAS</h3>
                    <p>tecnologias aqui...</p>
                    </>
                )}
                 {fitaAtiva === 'certificados' && (
                    <>
                    <h2>PLAY // PROG_04</h2>
                    <h3>CERTIFICADOS</h3>
                    <p>certificados aqui...</p>
                    </>
                )}
                 {fitaAtiva === 'esteprojeto' && (
                    <>
                    <h2>PLAY // PROG_05</h2>
                    <h3>SOBRE O PROJETO</h3>
                    <p>descrição aqui...</p>
                    </>
                )}
                {fitaAtiva === 'contato' && (
                  <>
                    <h2>PLAY // PROG_06</h2>
                    <h3>CONTATO</h3>
                    <p>LinkedIn | GitHub</p>
                  </>
                )}
              </div>
            )}

          </Monitor>
            <PlayerVHS   
            setFitaAtiva={setFitaAtiva} 
            tvLigada={tvLigada} 
            setTvLigada={setTvLigada} />
        </div>

        </div>

    )
}

export default App