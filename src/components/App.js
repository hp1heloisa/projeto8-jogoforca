import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {

  const [clicadas,setClicadas] = useState([]);
  const [contagem, setContagem] = useState(0);
  const [pode, setPode] = useState(false);
  const [palavra,setPalavra] = useState('');
  const [forma,setFoma] = useState([]);
  const [habilita, setHabilita] = useState('');
  const [estilo,setEstilo] = useState('')


  return (
    <div>
      <Jogo setContagem={setContagem} setClicadas={setClicadas} setPode={setPode} pode={pode} palavras={palavras} palavra={palavra} setPalavra={setPalavra} contagem={contagem} 
      clicadas={clicadas} forma={forma} setFoma={setFoma} estilo={estilo} habilita={habilita} setHabilita={setHabilita} setEstilo={setEstilo}/>
      
      <Letras pode={pode} palavra={palavra} clicadas={clicadas} setClicadas={setClicadas} setHabilita={setHabilita}
       contagem={contagem} setContagem={setContagem} forma={forma} setEstilo={setEstilo}/>
    </div>
  );
}


