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
          <h2>Espaço para investimentos</h2>          
          <h3 className="title">Mercado de Capitais</h3>
          <p>
            O mercado de capitais é um mercado criado para a negociação de ativos financeiros.
            Constituído por bolsas de valores, corretoras e instituições financeiras autorizadas, 
            ele é responsável pela intermediação entre poupadores e tomadores de recursos.
          </p>
          <h3 className="title">Tickers</h3>
          <p>
            Ticker é um código usado na bolsa de valores para identificar e negociar um determinado 
            ativo. Em outras palavras, ele é uma abreviação do nome do ativo para facilitar tanto 
            a identificação quanto a negociação do mesmo. Ou seja, conhecer o ticker de uma ação 
            é o primeiro passo para começar a investir na bolsa.
            Desse modo, através dessa abreviação o investidor consegue encontrar o ativo na 
            plataforma que utiliza e negociá-lo. Também é possível acompanhar a evolução de sua 
            rentabilidade.
          </p>
          <h3 className="title">Benchmarking</h3>
          <p>
            Benchmarking é um processo contínuo para avaliar produtos, serviços e práticas dos concorrentes 
            mais fortes e das empresas que são reconhecidas como líderes empresariais, com o propósito de 
            aprimoramento empresarial.
          </p>
          <h3 className="title">Derivativos</h3>
          <p>
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Investing;


