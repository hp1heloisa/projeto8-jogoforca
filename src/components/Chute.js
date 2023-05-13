export default function Chute(props){
    const {palavra,habilita, setForma, setContagem, chute, setChute} = props;
    function chutar() {
        if (chute==palavra){
            setForma(palavra.split(''))
        } else{
            setContagem(6)
        }
    }
    function clicarNoEnter(event){
        if (event.keyCode === 13) {
            chutar();
        }
    }
    return(
        <div className="divChute">
            <div className="descricao">Já sei a palavra!</div>
            <input className="descricao" value={chute} disabled={habilita} onChange={e => setChute(e.target.value)} onKeyDown={clicarNoEnter} data-test="guess-input"/>
            <button className="chute" onClick={chutar} disabled={habilita} data-test="guess-button">Chutar</button>
        </div>
    )
}