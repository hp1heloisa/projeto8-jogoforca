import imagens from "../imagens";

export default function Jogo(props){

    const {palavras,setPalavra,setPode,pode,contagem,setContagem,letrasClicadas,setLetrasClicadas,palavra,
        forma,setForma,estilo, setEstilo, setHabilita, setChute} = props
    function aleatorizarPalavras() {
        return Math.random() - 0.5;
      }
    
    function playGame(){
        palavras.sort(aleatorizarPalavras)
        setPalavra(palavras[0]);
        setPode(true);
        setContagem(0);
        setLetrasClicadas([]);
        setEstilo('');
        setHabilita(false);
        setChute('');
        const novaForma = [];
        for (let i=0;i<palavras[0].length;i++){
            novaForma.push(<div key={i}>_</div>);
        }
        setForma(novaForma);
    }

    function removerAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      }

   function renderizaPalavra(letra,i){
    if (letrasClicadas.includes(removerAcentos(letra)) || estilo==='vermelho'){
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


