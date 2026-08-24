import './App.css'
import Monitor from './Monitor'
import PlayerVHS from './PlayerVHS'
import FitaCassete from './FitaCassete'
function App() {
    return (
       <div className='cenario'>
        <div className='estante'>
            <FitaCassete titulo="01_SOBRE_MIM.vhs" cor="#c0392b" inclinacao={4}/>
            <FitaCassete titulo="02_PROJETOS.vhs" cor="#2ed573" inclinacao={2}/>
            <FitaCassete titulo="03_TECNOLOGIAS.vhs" cor="#ff5f02" inclinacao={1}/>
            <FitaCassete titulo="04_CERTIFICADOS.vhs" cor="#1e3799" inclinacao={3}/>
            <FitaCassete titulo="05_ESTE_PROJETO.vhs" cor="#574b90" inclinacao={4}/>
            <FitaCassete titulo="06_CONTATO.vhs" cor="#ffa502" inclinacao={5}/>
        </div>



        <div className='televisao'>
           <Monitor>
            </Monitor>
            <PlayerVHS>
            </PlayerVHS>
        </div>

        </div>

    )
}

export default App