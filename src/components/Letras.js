export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const {letrasClicadas, setLetrasClicadas, contagem, setContagem, forma, palavra, setEstilo, setHabilita} = props;
    
    function removerAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function verificaResultado(){
        if(contagem>5){
            setEstilo('vermelho');
            setHabilita(true);
        } else if (teste==palavra.length && palavra.length>0 ){
            setEstilo('verde');
            setHabilita(true);
        }
    }

    function clicarNaLetra(i) {
        if (!removerAcentos(palavra).split('').includes(alfabeto[i]) && contagem<6){
            setContagem(contagem+1);
        }
        setLetrasClicadas([...letrasClicadas,alfabeto[i]]);
    }

    function BotaoLetra(props){
        const {modoLetra, indice, disabled, letra} = props
        return(
            <button 
            className={`geral ${modoLetra}`} onClick={() => {clicarNaLetra(indice)}} 
            key={indice} disabled={disabled} data-test="letter">{letra.toUpperCase()}
            </button>
        )
    }

    let teste=0;
    forma.map((forma,i) => {if (forma==palavra[i]) teste++ })

    console.log(palavra)
    
    return(
        <div className="letras">
            {alfabeto.map(
                (letra, i) => {
                     if  (!props.pode || contagem>5 || teste==palavra.length){
                        verificaResultado();
                        return <BotaoLetra modoLetra='letraOff' indice={i} letra={letra} disabled={true} />
                    } else{
                        if (letrasClicadas.includes(alfabeto[i])){
                            return <BotaoLetra modoLetra='letraOff' indice={i} letra={letra} disabled={true} />
                        } else{
                           return <BotaoLetra modoLetra='letraOn' indice={i} letra={letra} disabled={false} />
                        }
                    }
                }
                )}
        </div>
    )
}
