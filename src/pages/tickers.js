import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import CardTicker from "../components/cardTicker";
import './tickers.css'

const Ticker = () => {
  return (
    <>
      <Header />
      <Navbar />

      <main className="main-content">
        <section className="text-center ">
          <div className="container-fluid justify-content-center ">
            <h3 className="title">Acompanhe em tempo real todas as ações e seus valores</h3>
          </div>
        </section>
        <CardTicker />
      </main>
      
    </>
  );
};

export default Ticker;

