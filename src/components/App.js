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
  const [estilo,setEstilo] = useState('')


  return (
    <div>
      <Jogo setPode={setPode} pode={pode} palavras={palavras} palavra={palavra} setPalavra={setPalavra} contagem={contagem} 
      clicadas={clicadas} forma={forma} setFoma={setFoma} estilo={estilo} />
      
      <Letras pode={pode} palavra={palavra} clicadas={clicadas} setClicadas={setClicadas} 
      contagem={contagem} setContagem={setContagem} forma={forma} setEstilo={setEstilo}/>
    </div>
  );
}


