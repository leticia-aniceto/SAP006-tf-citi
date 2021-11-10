import React from "react";
import { useState } from "react";
// import Button from '../components/button';
import Navbar from "../components/navbar";
import Header from "../components/header";
import '../style.css'
import Chart from "./chart";
import Rentability from "./rentability";


const Home = () => {

  /* state para controlar ação de comparação */
  const [compare, doCompare] = useState(false);

  const [compareTwo, doCompareTwo] = useState(false);
  /* state pra armazenar o intervalo do recorte dos dados históricos */
  const [interval, setInterval] = useState({ start: false, end: false });
  /* state para controlar todas as ações selecionadas, por default já vem o google */
  const [selectedActions, setSelectedActions] = useState([{ symbol: "GOOGL", name: "Google" }])
  /* state para controlar ações disponíveis para serem selecionadas. o ideal seria fazer uma consulta pra API pra ter uma lista maior, 
   nao a toa as chaves do objeto são os simbolos das ações e os valores sao os nomes completos, isso permite a operação da linha 28 ser realizada em O(1)  */
  const [availableActions] = useState({ "GOOGL": "Google", "AAPL": "Apple", "AMZN": "Amazon", "TSLA": "Tesla", "FB": "Facebook", "NFLX": "Netflix" })

  // Handler para select das ações. Atualiza o state selectedActions com o símbolo e o nome da ação selecinada
  const onSelectItem = (value, index) => {
    setSelectedActions(prevState => {
      // Cria um array temporario e altera o simbolo e o nome relativo da acao selecionada
      let temp = [...prevState];
      temp[index] = {
        symbol: value,
        name: availableActions[value]
      }
      return temp;
    });
  }

  /* Handler para os inputs de datas. Atualiza o state que controla o inicio e o final do intervalo.  formato YYYY-MM-DD */
  const onChangeInterval = (value, type = 'start') => {
    setInterval(prevState => ({
      ...prevState,  // valores antigos
      [type]: value  // sobrescreve start ou end com o valor
    }))
  }

  // Handler para botão de adicionar ação
  const addAction = (e) => {
    if (selectedActions.length === 3) return alert("Selecione até 3 ações para comparar"); // se nenhuma estiver disponivel avisa o usuario
    const symbols = selectedActions.map(item => item.symbol); // pega os simbolos das ações selecionadass
    const notSelectedYet = Object.keys(availableActions).filter((symbol) => symbols.indexOf(symbol) === -1); // filtra das acoes disponiveis os que nao foram selecionados
    setSelectedActions(prevState => [...prevState, { symbol: notSelectedYet[0], name: availableActions[notSelectedYet[0]] }]); // adiciona às ações selecionadas a nova ação com a primeira ação da lista de ainda disponíveis
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="flexBox">
        <div className="container justify-content-center">
          <div className="title">
            <h2>Comparação de preços entre ações listadas na Bolsa</h2>
          </div>

          {/* <form className="row gy-2 gx-3 justify-content-center"> */}
          <div className="container-fluid">
            <div class="row text-center">
              {selectedActions.map((item, index) => (
                <div key={index} className="form-group col">
                  <label >Ação {index + 1}</label>
                  <select onChange={(e) => onSelectItem(e.target.value, index)} className="form-control" value={item.symbol} >
                    {/* itera lista de ações disponíveis para mostrar as opções disponíveis */}
                    {Object.keys(availableActions).map(action => (
                      <option key={action} value={action} defaultValue>{availableActions[action]}</option>
                    ))}
                  </select>
                </div>

              ))}
              <div class="form-group col">
                <label>⠀</label>
                <button disabled={selectedActions.length === 3} onClick={(e) => { e.preventDefault(); addAction(e); }} className="btn btn-primary btn-block mt-2">Adicionar ação</button>
              </div>
            </div>
            <div class="row mt-2 text-center">
              <div class="col-md-auto p-24">
                <p class="v-c">Intervalo de tempo</p>
              </div>
              <div class="form-group col">
                <label>Início</label>

                <input onChange={(e) => onChangeInterval(e.target.value)} type="date" className="form-control" />
              </div>
              <div class="col-md-auto p-24">
                <p class="v-c">a</p>
              </div>
              <div className="form-group col">

                <label>Fim</label>

                <input onChange={(e) => onChangeInterval(e.target.value, 'end')} type="date" className="form-control" />
              </div>
              <div class="form-group col ">
                <label>⠀</label>

                <button onClick={(e) => { e.preventDefault(); doCompare(prev => true); }} disabled={!interval.start || !interval.end} className="btn btn-dark btn-block">Fechamento diário</button>
              </div>
              <div class="col">
                <label>⠀</label>

                <button onClick={(e) => { e.preventDefault(); doCompareTwo(prev => true); }} disabled={!interval.start || !interval.end} className="btn btn-dark btn-block">Rentabilidade</button>
              </div>
            </div>

            <div className="flexBox mt-5">
              {compare === true && (<Chart compare={compare} symbols={selectedActions.map(action => action.symbol)}
                startDate={interval.start} endDate={interval.end} />)}

              {compareTwo === true && (<Rentability compareTwo={compareTwo} symbols={selectedActions.map(action => action.symbol)}
                startDate={interval.start} endDate={interval.end} />)}
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default Home;