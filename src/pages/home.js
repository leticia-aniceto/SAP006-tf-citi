import React from "react";
// import { useState } from "react";
import Button from '../components/button'
import Navbar from "../components/navbar";
import '../style.css'
import {apiMensal} from "../services/alphavantage.js"

const Home = () => {
  apiMensal('AAPL')
  return (
    <>
      <Navbar />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <h2>Comparação de preços entre ações listadas na Bolsa</h2>
          <form className="row gy-2 gx-3 justify-content-center">
            <div className="col-auto">
              <select className="form-select text-center" aria-label="Default select example ">
                <option defaultValue>Ação 1</option>
                <option value="1">Google</option>
              </select>
              <select className="form-select text-center" aria-label="Default select example">
                <option defaultValue>Ação 2</option>
                <option value="1">Apple</option>
              </select>
              <hr />
              <input type="date"></input>
              <input type="date"></input>
            </div>
          </form>
          <Button type="submit" text="Consultar" />
        </div>
      </div>
    </>

  );
};

export default Home;
