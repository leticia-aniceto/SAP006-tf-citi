import React from "react";
// import { useState } from "react";
import Button from '../components/button'
import Navbar from "../components/navbar";
import Header from "../components/header";
import Banner from "../components/banner";
import SearchBar from "../components/searchBar";
import '../style.css'
import './home.css'
import Chart from "./chart";

const Home = () => {

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <h2>Comparação de preços entre ações listadas na Bolsa</h2>
          <section className="actions-bar">
            <SearchBar />
            <form className="row gy-2 gx-3 justify-content-center">
              <div className="col-auto">
                {/* <select className="form-select text-center" aria-label="Default select example ">
                  <option defaultValue>Ação 1</option>
                  <option value="1">Google</option>
                </select>
                <select className="form-select text-center" aria-label="Default select example">
                  <option defaultValue>Ação 2</option>
                  <option value="1">Apple</option>
                </select>
                <hr /> */}
                <h4 className="text-date">Intervalo de tempo</h4>
                <input type="date" className="gray"></input>
                <h4 className="text-date">a</h4>
                <input type="date" className="gray"></input>
              </div>
            </form>
          </section>

          <Button type="submit" text="Consultar" />
        </div>
      </div>
      <Chart />
    </>

  );
};

export default Home;
