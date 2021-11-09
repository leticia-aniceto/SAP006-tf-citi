import React from "react";
import { useState } from "react";
// import Button from '../components/button'
import Navbar from "../components/navbar";
import Header from "../components/header";
import '../style.css'
import Chart from "./chart";

const Home = () => {

  /* state para controlar ação de comparação */
  const [compare, doCompare] = useState(0);
  /* state pra armazenar o intervalo do recorte dos dados históricos */
  const [interval, setInterval] = useState({start: false, end: false});
  /* state para controlar todas as ações selecionadas, por default já vem o google */
  const [selectedActions, setSelectedActions] = useState([{ symbol: "GOOGL", name: "Google" }]) 
  /* state para controlar ações disponíveis para serem selecionadas. o ideal seria fazer uma consulta pra API pra ter uma lista maior, 
   nao a toa as chaves do objeto são os simbolos das ações e os valores sao os nomes completos, isso permite a operação da linha 28 ser realizada em O(1)  */
  const [availableActions, setAvailableActions] = useState({ "GOOGL": "Google", "AAPL": "Apple", "AMZN": "Amazon", "TSLA": "Tesla", "FB": "Facebook", "NFLX": "Netflix" })

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

  /* Handler para os inputs de datas. Atualiza o state que controla o inicio e o final do intervalo. Felizmente elas já vem no formato YYYY-MM-DD,
  que é o usado pela API */
  const onChangeInterval = (value, type = 'start') => {
    setInterval(prevState => ({
      ...prevState,  // valores antigos
      [type]: value  // sobrescreve start ou end com o valor
    }))
  }

  // Handler para botão de adicionar ação
  const addAction = (e) => {
    const symbols = selectedActions.map(item => item.symbol); // pega os simbolos das ações selecionadass
    const notSelectedYet = Object.keys(availableActions).filter((symbol) => symbols.indexOf(symbol) === -1); // filtra das acoes disponiveis os que nao foram selecionados
    if (notSelectedYet.length === 0) return alert("Todas as ações já foram selecionadas"); // se nenhuma estiver disponivel avisa o usuario
    setSelectedActions(prevState => [...prevState, { symbol: notSelectedYet[0], name: availableActions[notSelectedYet[0]] }]); // adiciona às ações selecionadas a nova ação com a primeira ação da lista de ainda disponíveis
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="">
        <div className="container justify-content-center">
          <div className="title">
            <h2>Comparação de preços entre ações listadas na Bolsa</h2>

          </div>
          {/* <form className="row gy-2 gx-3 justify-content-center"> */}
          <div className="row">
            <div className="col-5">
              <form>
                {/* itera ações selecionadas e mostra um select para cada uma */}
                {selectedActions.map((item, index) => (
                  <div key={index} className="form-group">
                    <label >Ação {index + 1}</label>
                    <select onChange={(e) => onSelectItem(e.target.value, index)} className="form-control" value={item.symbol} >
                      {/* itera lista de ações disponíveis para mostrar as opções disponíveis */}
                      {Object.keys(availableActions).map(action => (
                        <option key={action} value={action} defaultValue>{availableActions[action]}</option>
                      ))}
                    </select>
                  </div>

                ))}
                <a onClick={addAction} className="btn btn-primary btn-block mt-2">Adicionar ação</a>
                <hr />
                <div className="row">
                <label >Intervalo</label>
                  <div className="col">
                    {/*  a função onChangeInterval tem como o valor default para o parametro type "start", por isso ele é omitido aqui */}
                    <input onChange={(e) => onChangeInterval(e.target.value)} type="date" className="form-control" />
                  </div>
                  <div className="col">
                    <input  onChange={(e) => onChangeInterval(e.target.value, 'end')} type="date" className="form-control" />
                  </div>
                </div>
                {/* o botao fica desabilitado se os intervalos nao forem selecionados atraves da propriedade disabled */}
                <button onClick={(e) => {e.preventDefault(); doCompare(prev => prev + 1);}} disabled={!interval.start || !interval.end} className="btn btn-dark btn-block mt-2">Consultar</button>

              </form>

            </div>

            <div className="col-7" >
              {/* renderiza o componente cada vez que as props forem alteradas */}
              <Chart compare={compare} symbols={selectedActions.map(action => action.symbol)} startDate={interval.start} endDate={interval.end} />

            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default Home;
