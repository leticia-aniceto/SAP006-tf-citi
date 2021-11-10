import React from "react";
import { useState } from "react";
// import Button from '../components/button'
import Navbar from "../components/navbar";
import Header from "../components/header";
import '../style.css'
import Chart from "./chart";
import {searchName} from "../services/alphavantage.js"

const SearchPage = () =>{
    const [cards, setCards] = useState([])
    const [searchValue, setSearchValue] = useState() 
    const handleChange = e => {
        setSearchValue(e.target.value)
    }
    const searchSymbol = (e) => {
        e.preventDefault()
        searchName(searchValue).then((result) => {
            setCards(result.data['bestMatches'])
        })
    }
return (
    <>
      <Header />
      <Navbar />
      <div className="">
        <div className="container justify-content-center">
          <div className="title">
            <h2>Empresas na bolsa de Nova York</h2>

          </div>
          {/* <form className="row gy-2 gx-3 justify-content-center"> */}
          <div className="row">
            <div className="col-5">
              <form>
                <label>Digite o nome ou tickers da empresa</label>
                <input type="text" onChange={handleChange}/>
                {/* o botao fica desabilitado se os intervalos nao forem selecionados atraves da propriedade disabled */}
                <button onClick={searchSymbol} className="btn btn-dark btn-block mt-2">Consultar</button> 

              </form>
              <ul className="cards">
              {cards.map((item) => {
                  console.log(item)
                return (
                  <>
                    {item['2. name']}
                  </>
                );
              })}
            </ul>
            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default SearchPage;