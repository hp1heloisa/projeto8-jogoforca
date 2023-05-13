import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {

  const [letrasClicadas,setLetrasClicadas] = useState([]);
  const [contagem, setContagem] = useState(0);
  const [pode, setPode] = useState(false);
  const [palavra,setPalavra] = useState('');
  const [forma,setForma] = useState([]);
  const [estilo,setEstilo] = useState('')
  const [habilita,setHabilita] = useState(true);
  const [chute, setChute] = useState('')



  return (
    <div className="tudo">
      <Jogo setContagem={setContagem} setLetrasClicadas={setLetrasClicadas} setPode={setPode} pode={pode} palavras={palavras} palavra={palavra} setPalavra={setPalavra} contagem={contagem} 
      letrasClicadas={letrasClicadas} forma={forma} setForma={setForma} estilo={estilo} setEstilo={setEstilo} setHabilita={setHabilita} setChute={setChute} />
      
      <Letras pode={pode} palavra={palavra} letrasClicadas={letrasClicadas} setLetrasClicadas={setLetrasClicadas} setHabilita={setHabilita}
       contagem={contagem} setContagem={setContagem} forma={forma} setEstilo={setEstilo}/>
      
      <Chute palavra={palavra} habilita={habilita} setForma={setForma} setContagem={setContagem} setChute={setChute} 
      chute={chute}/>
    </div>
  );
}


