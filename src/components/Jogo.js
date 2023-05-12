import forca0 from '../assets/forca0.png';
import forca1 from '../assets/forca1.png';
import forca2 from '../assets/forca2.png';
import forca3 from '../assets/forca3.png';
import forca4 from '../assets/forca4.png';
import forca5 from '../assets/forca5.png';
import forca6 from '../assets/forca6.png';

export default function Jogo(props){

    const {palavras,setPalavra,setPode,pode,contagem,setContagem,clicadas,setClicadas,palavra,
        forma,setForma,estilo, setEstilo, setHabilita, setChute} = props
    const imagens = [forca0,forca1,forca2,forca3,forca4,forca5,forca6];
    function compararAleatorio() {
        return Math.random() - 0.5;
      }
    
    function playGame(){
        if (true){
            props.palavras.sort(compararAleatorio)
            setPalavra(palavras[0]);
            setPode(true);
            setContagem(0);
            setClicadas([]);
            setEstilo('');
            setHabilita('');
            setChute('');
            const nova = [];
            for (let i=0;i<palavras[0].length;i++){
                nova.push(<div key={i}>_</div>);
            }
            setForma(nova);
        }
    }

    function removerAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }

   function renderizaPalavra(letra,i){
    if (clicadas.includes(removerAcentos(letra)) || estilo=='vermelho'){
        forma[i] = letra;
        return (letra);
    } else{
        return forma[i];
    }
   }
    
    return(
        <div className="superior">
            <img src={imagens[contagem]} alt={imagens[contagem]} data-test="game-image"/>
            <div className='direita'>
                <button className="escolha" onClick={playGame} data-test="choose-word">Escolher Palavra</button>
                {pode ? <div className={`escolhida ${estilo}`} data-test="word">{palavra.split('').map((letra,i) => renderizaPalavra(letra,i))} </div> : '' }
            </div>
        </div>
    )
}


