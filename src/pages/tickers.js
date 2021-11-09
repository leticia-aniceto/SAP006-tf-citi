import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";

const Investing = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <h2>Tickers</h2>          
          <h3 className="title">Mercado de Capitais</h3>
        </div>
      </div>
    </>
  );
};

export default Investing;

