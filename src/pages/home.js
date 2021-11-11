import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import '../style.css';
import Chart from "./chart";
import Rentability from "./rentability"

const Home = () => {
  const [compare, doCompare] = useState(false);
  const [compareTwo, doCompareTwo] = useState(false);
  const [interval, setInterval] = useState({ start: false, end: false });
  const [selectedActions, setSelectedActions] = useState([{ symbol: "GOOGL", name: "Google" }])
  const [availableActions] = useState({ "GOOGL": "Google", "AAPL": "Apple", "AMZN": "Amazon", "TSLA": "Tesla", "FB": "Facebook", "NFLX": "Netflix" })

  const onSelectItem = (value, index) => {
    setSelectedActions(prevState => {
      let temp = [...prevState];
      temp[index] = {
        symbol: value,
        name: availableActions[value]
      }
      return temp;
    });
  }

  const onChangeInterval = (value, type = 'start') => {
    setInterval(prevState => ({
      ...prevState,  
      [type]: value  
    }))
  }

  const addAction = (e) => {
    if (selectedActions.length === 3) return alert("Selecione até 3 ações para comparar");
    const symbols = selectedActions.map(item => item.symbol);
    const notSelectedYet = Object.keys(availableActions).filter((symbol) => symbols.indexOf(symbol) === -1); 
    setSelectedActions(prevState => [...prevState, { symbol: notSelectedYet[0], name: availableActions[notSelectedYet[0]] }]);
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
          <div className="container-fluid">
            <div className="row text-center">
              {selectedActions.map((item, index) => (
                <div key={index} className="form-group col">
                  <label >Ação {index + 1}</label>
                  <select onChange={(e) => onSelectItem(e.target.value, index)} className="form-control" value={item.symbol} >
                    {Object.keys(availableActions).map(action => (
                      <option key={action} value={action} defaultValue>{availableActions[action]}</option>
                    ))}
                  </select>
                </div>

              ))}
              <div className="form-group col">
                <label>⠀</label>
                <button disabled={selectedActions.length === 3} onClick={(e) => { e.preventDefault(); addAction(e); }} className="btn btn-primary btn-block btn-block-blue mt-2">Adicionar ação</button>
              </div>
            </div>
            <div className="row mt-2 text-centerpr">
              <div className="col-md-auto p-24">
                <p className="v-c">Intervalo de tempo</p>
              </div>
              <div className="form-group col">
                <label>Início</label>

                <input onChange={(e) => onChangeInterval(e.target.value)} type="date" className="form-control" />
              </div>
              <div className="col-md-auto p-24">
                <p className="v-c">a</p>
              </div>
              <div className="form-group col">

                <label>Fim</label>

                <input onChange={(e) => onChangeInterval(e.target.value, 'end')} type="date" className="form-control" />
              </div>
              <div className="form-group col ">
                <label>⠀</label>

                <button onClick={(e) => { e.preventDefault(); doCompare(prev => true); }} disabled={!interval.start || !interval.end} className="btn btn-dark btn-block">Fechamento diário</button>
              </div>
              <div className="col">
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