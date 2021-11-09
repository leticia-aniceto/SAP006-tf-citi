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
          Derivativos são contratos que derivam a maior parte de seu valor de um ativo subjacente, taxa 
          de referência ou índice. O ativo subjacente pode ser físico (café, ouro, etc.) ou financeiro 
          (ações, taxas de juros, etc.), negociado no mercado à vista ou não (é possível construir um 
          derivativo sobre outro derivativo). Os derivativos podem classificados em contratos a termo, 
          contratos futuros, opções de compra e venda, operações de swaps, entre outros, cada qual com 
          suas características.
          Os derivativos, em geral, são negociados sob a forma de contratos padronizados, isto é, 
          previamente especificados (quantidade, qualidade, prazo de liquidação e forma de cotação do 
          ativo-objeto sobre os quais se efetuam as negociações), em mercados organizados, com o fim 
          de proporcionar, aos agentes econômicos, oportunidades para a realização de operações que 
          viabilizem a transferência de risco das flutuações de preços de ativos e de variáveis 
          macroeconômicas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Investing;


