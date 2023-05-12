import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {

  const [clicadas,setClicadas] = useState([]);
  const [contagem, setContagem] = useState(0);
  const [pode, setPode] = useState(false);
  const [palavra,setPalavra] = useState('');
  const [forma,setForma] = useState([]);
  const [estilo,setEstilo] = useState('')
  const [habilita,setHabilita] = useState('disabled');
  const [chute, setChute] = useState('')



  return (
    <div className="tudo">
      <Jogo setContagem={setContagem} setClicadas={setClicadas} setPode={setPode} pode={pode} palavras={palavras} palavra={palavra} setPalavra={setPalavra} contagem={contagem} 
      clicadas={clicadas} forma={forma} setForma={setForma} estilo={estilo} setEstilo={setEstilo} setHabilita={setHabilita} setChute={setChute} />
      
      <Letras pode={pode} palavra={palavra} clicadas={clicadas} setClicadas={setClicadas} setHabilita={setHabilita}
       contagem={contagem} setContagem={setContagem} forma={forma} setEstilo={setEstilo}/>
      
      <Chute palavra={palavra} habilita={habilita} setForma={setForma} setContagem={setContagem} setChute={setChute} 
      chute={chute}/>
    </div>
  );
}


