import './App.css'
import Monitor from './Monitor'
import PlayerVHS from './PlayerVHS'
import JanelaJanela from './JanelaJanela'
import FitaCassete from './FitaCassete'
function App() {
    return (
       <div className='cenario'>
        <div className='televisao'>
           <Monitor>
            <JanelaJanela/>
            </Monitor>
            <PlayerVHS>
            </PlayerVHS>
        </div>

        <div className='estante'>
            <FitaCassete titulo="01_SOBRE_MIM.vhs" cor="#c0392b"/>
            <FitaCassete titulo="02_PROJETOS.vhs" cor="#2ed573" />
            <FitaCassete titulo="03_TECNOLOGIAS.vhs" cor="#ff5f02" />
            <FitaCassete titulo="04_CERTIFICADOS.vhs" cor="#1e3799" />
            <FitaCassete titulo="05_ESTE_PROJETO.vhs" cor="#574b90" />
            <FitaCassete titulo="06_CONTATO.vhs" cor="#ffa502" />
        </div>

        </div>

    )
}

export default App