import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import "../style.css";
import "./search.css";
import { searchName, searchStock } from "../services/alphavantage.js";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cards, setCards] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue.length > 2) {
      searchName(searchValue).then((result) => {
        if (result.data["bestMatches"]) {
          setSearchResult(result.data["bestMatches"].slice(0, 3));
        }
      });
    } else {
      if (searchResult.length > 0) setSearchResult([])
    }
  }, [searchValue]);

  const createCard = (e) => {
    searchStock(e.target.getAttribute("symbol")).then((result) => {
      if (result.status === 200) {
        let stock = result.data["Global Quote"];
        setCards((cards) => [...cards, stock]);
      }
    });
    setSearchValue("");
    setSearchResult([])
  };
  
  return (
    <>
      <Header />
      <Navbar />
      <div className="">
        <div className="container justify-content-center">
          <div className="title">
            <h2>Busca de empresas globais</h2>
            <h5 className="title">Acompanhe em tempo real todas as ações e seus valores</h5>
          </div>
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome da empresa"
                onChange={handleChange}
                value={searchValue}
              />
              <ul className="list-group">
                {searchResult.map((item) => {
                  return (
                    <li
                      key={item["1. symbol"]}
                      onClick={createCard}
                      symbol={item["1. symbol"]}
                      className="list-group-item cursor-pointer"
                    >
                      {item["1. symbol"] + " - " + item["2. name"]}
                    </li>
                  );
                })}
              </ul>
              <hr/>
              <section>
                {cards.map((item) => {
                  return (
                    <div
                      className="card-ticker"
                      key={item["01. symbol"]}
                    >
                      <div className="card-name">
                        <h4 className="card-title">{item["01. symbol"]}</h4>
                      </div>

                      <div className="card-data">
                        <p className="open">
                          <strong>Abertura</strong> <br />
                          $ {item["02. open"]}
                        </p>
                        <p className="close">
                          <strong>Último fechamento</strong> <br />
                          $ {item["05. price"]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;