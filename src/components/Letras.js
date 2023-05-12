import { useState } from "react"

let contagem = 0;
export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const {clicadas, setClicadas, contagem, setContagem, forma, palavra, setEstilo} = props;
    function clicarNaLetra(i) {
        if (!props.palavra.split('').includes(alfabeto[i]) && contagem<6){
            setContagem(contagem+1);
        }
        const nova = [...clicadas,alfabeto[i]]
        setClicadas(nova);
    }
    let teste=0;
    for (let i=0;i<palavra.length;i++){
        if (forma[i]==palavra[i]){
            teste++;
        }
    }

    console.log(palavra)
    
    return(
        <div className="letras">
            {alfabeto.map(
                (letra, i) => {
                     if  (!props.pode || contagem>5 || teste==palavra.length){
                        if(contagem>5){
                            setEstilo('vermelho')
                        } else if (teste==palavra.length && palavra.length>0 ){
                            setEstilo('verde')
                        }
                       return(<button className='geral letraOff' onClick={clicarNaLetra} key={i} disabled>{letra.toUpperCase()}
                        </button>);
                    } else{
                        if (clicadas.includes(alfabeto[i])){
                            return(<button className='geral letraOff' onClick={() => clicarNaLetra(i)} key={i} disabled>{letra.toUpperCase()}
                        </button>);
                        } else{
                            return(<button className='geral letraOn' onClick={() => clicarNaLetra(i)} key={i}>{letra.toUpperCase()}
                        </button>);
                        }
                    }
                }
                )}
        </div>
    )
}