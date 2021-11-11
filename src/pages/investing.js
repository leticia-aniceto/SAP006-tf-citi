import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Banner from "../components/banner";
import "./investing.css";

const Investing = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <div className="text-center">
        <div className="container-fluid justify-content-center">
          <h2 className="title">Aprenda sobre os termos mais utilizados no mercado financeiro</h2>
          <section className="profile-cards">
            <div className="col-md-5">
              <div className="card">
                <h5 className="card-title">Mercado de Capitais</h5>
                <h6 className="card-subtitle mb-2 text-muted">O que é Mercado de Capitais?</h6>
                <p className="card-text">O mercado de capitais é um mercado criado para a negociação de ativos financeiros.
                  Constituído por bolsas de valores, corretoras e instituições financeiras autorizadas,
                  ele é responsável pela intermediação entre poupadores e tomadores de recursos.</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <h5 className="card-title">Benchmarking</h5>
                <h6 className="card-subtitle mb-2 text-muted">O que é Benchmarking?</h6>
                <p className="card-text">Benchmarking é um processo contínuo para avaliar produtos, serviços e práticas dos concorrentes
                  mais fortes e das empresas que são reconhecidas como líderes empresariais, com o propósito de
                  aprimoramento empresarial.</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <h5 className="card-title">Tickers</h5>
                <h6 className="card-subtitle mb-2 text-muted">O que é Tickers?</h6>
                <p className="card-text">Ticker é um código usado na bolsa de valores para identificar e negociar um determinado
                  ativo. Em outras palavras, ele é uma abreviação do nome do ativo para facilitar tanto
                  a identificação quanto a negociação do mesmo. Ou seja, conhecer o ticker de uma ação
                  é o primeiro passo para começar a investir na bolsa.
                  Desse modo, através dessa abreviação o investidor consegue encontrar o ativo na
                  plataforma que utiliza e negociá-lo. Também é possível acompanhar a evolução de sua
                  rentabilidade.</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card">
                <h5 className="card-title">Derivativos</h5>
                <h6 className="card-subtitle mb-2 text-muted">O que são Derivativos?</h6>
                <p className="card-text">Derivativos são contratos que derivam a maior parte de seu valor de um ativo subjacente, taxa
                  de referência ou índice. O ativo subjacente pode ser físico (café, ouro, etc.) ou financeiro
                  (ações, taxas de juros, etc.), negociado no mercado à vista ou não (é possível construir um
                  derivativo sobre outro derivativo). Os derivativos podem classificados em contratos a termo,
                  contratos futuros, opções de compra e venda, operações de swaps, entre outros, cada qual com
                  suas características.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Investing;
