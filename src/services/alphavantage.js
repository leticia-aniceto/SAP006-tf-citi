import axios from 'axios';
import moment from 'moment';

/* usa o arquivo .env para armazenar o conteudo sensivel da aplicação, elas são acessíveis através do process.env
 https://create-react-app.dev/docs/adding-custom-environment-variables/ */

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

/* função para busca binária em um array ordenado. ela olha para a metade de uma partição do array e caso 
o meio nao for o elemento desejado (val), ela continuamente olha para o meio de uma das particoes restantes
ela retorna o indice do elemento caso encontrado ou -1
https://pt.wikipedia.org/wiki/Pesquisa_bin%C3%A1ria*/
const binarySearch = (arr, val) => {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    if (val < arr[mid]) end = mid - 1;
    else start = mid + 1
  }
  return -1;
}

export const getDailyChartForSymbols = (symbols, start, end) => {
  /* funcao interna auxiliar para processar os dados de um simbolo por vez, retorna uma promise
    outputsize por default é 'full' para pegar todos os registros de dados históricos e não só os últimos 100 pontos
  https://www.alphavantage.co/documentation/ */
  const getDailyChartForSymbol = (symbol, outputsize = "full") => {
    return axiosInstance.get('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        outputsize,
        apikey: process.env.REACT_APP_API_KEY
      }
    }).then(response => {
      // recupera atributo Time Series (Daily), que contém o array da série temporal de registros históricos
      const data = response.data["Time Series (Daily)"];
      // se por qualquer razao data for falsy retorna um array vazio
      if (!data) return [];

      let startDate = moment(start, "YYYY-MM-DD");
      let endDate = moment(end, "YYYY-MM-DD");

      // acessa chaves em ordem invertida dos dados obtidos pela API. as chaves são as datas no formato YYYY-MM-DD
      let keys = Object.keys(data).reverse();

      // recupera última e primeira data de um registro válido da ação
      const last = moment(keys[keys.length - 1], "YYYY-MM-DD");
      const first = moment(keys[0], "YYYY-MM-DD");

      /* caso o limite inicial inserido pelo usuario for posterior a data do último registro valido retorna um array vazio
        visto que não existem dados que cubram o intervalo */
      if (first.isAfter(endDate)) return [];

      /* caso o primeiro registro seja depois da data inicial do intervalo do usuario ou o ultimo seja antes da data final do itnervalo
      definido pelo usuario, comprime o recorte, seja para começar a partir da primeira data valida e/ou até a última data válida*/
      if (first.isAfter(startDate)) startDate = first;
      if (last.isBefore(endDate)) endDate = last;

      /* usa busca binaria para encontrar no array de chaves o indice do primeiro registro valido e do ultimo, para poder
      fazer um recorte no array posteriormente através da função slice, obtendo apenas os dados disponiveis contidos no intervalo especificado */
      const indexOfFirst = binarySearch(keys, startDate.format('YYYY-MM-DD'));
      const indexOfLast = binarySearch(keys, endDate.format('YYYY-MM-DD'));

      /* retorna um objeto contendo o simbolo e o recorte dos dados. o preço é definido como o valor de fechamento retornado pela API
       ex. {
         symbol: 'GOOGL',
         data: [
           {
             date: '2005-11-25',
             price: 144.5
           },
           {
             date: '2005-11-26',
             price: 148
           },
         ]
       }
      */
      return { symbol, data: keys.slice(indexOfFirst, indexOfLast).map(date => ({ date, price: parseFloat(data[date]["4. close"]) })) };
    })
  }

  // Retorna uma promise que resolve em "paralelo" todas as promises da funcao auxiliar getDailyChartForSymbol para todos os simbolos inseridos pelo usuario
  return Promise.all(symbols.map(symbol => getDailyChartForSymbol(symbol)));
};

export const getDailyChartForSymbolsTwo = (symbols, start, end) => {
  /* funcao interna auxiliar para processar os dados de um simbolo por vez, retorna uma promise
    outputsize por default é 'full' para pegar todos os registros de dados históricos e não só os últimos 100 pontos
  https://www.alphavantage.co/documentation/ */
  const getDailyChartForSymbol = (symbol, outputsize = "full") => {
    return axiosInstance.get('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        outputsize,
        apikey: process.env.REACT_APP_API_KEY
      }
    }).then(response => {
      // recupera atributo Time Series (Daily), que contém o array da série temporal de registros históricos
      const data = response.data["Time Series (Daily)"];
      // se por qualquer razao data for falsy retorna um array vazio
      if (!data) return [];

      let startDate = moment(start, "YYYY-MM-DD");
      let endDate = moment(end, "YYYY-MM-DD");

      // acessa chaves em ordem invertida dos dados obtidos pela API. as chaves são as datas no formato YYYY-MM-DD
      let keys = Object.keys(data).reverse();

      // recupera última e primeira data de um registro válido da ação
      const last = moment(keys[keys.length - 1], "YYYY-MM-DD");
      const first = moment(keys[0], "YYYY-MM-DD");

      /* caso o limite inicial inserido pelo usuario for posterior a data do último registro valido retorna um array vazio
        visto que não existem dados que cubram o intervalo */
      if (first.isAfter(endDate)) return [];

      /* caso o primeiro registro seja depois da data inicial do intervalo do usuario ou o ultimo seja antes da data final do itnervalo
      definido pelo usuario, comprime o recorte, seja para começar a partir da primeira data valida e/ou até a última data válida*/
      if (first.isAfter(startDate)) startDate = first;
      if (last.isBefore(endDate)) endDate = last;

      /* usa busca binaria para encontrar no array de chaves o indice do primeiro registro valido e do ultimo, para poder
      fazer um recorte no array posteriormente através da função slice, obtendo apenas os dados disponiveis contidos no intervalo especificado */
      const indexOfFirst = binarySearch(keys, startDate.format('YYYY-MM-DD'));
      const indexOfLast = binarySearch(keys, endDate.format('YYYY-MM-DD'));

      /* retorna um objeto contendo o simbolo e o recorte dos dados. o preço é definido como o valor de fechamento retornado pela API
       ex. {
         symbol: 'GOOGL',
         data: [
           {
             date: '2005-11-25',
             price: 144.5
           },
           {
             date: '2005-11-26',
             price: 148
           },
         ]
       }
      */
      // eslint-disable-next-line no-sequences
  
      return { symbol, data: keys.slice(indexOfFirst, indexOfLast).map(date => ({ date, price: parseFloat(data[date]["4. close"]), priceopen:parseFloat(data[date]["1. open"]), 
     })) };
    })
  }

  // Retorna uma promise que resolve em "paralelo" todas as promises da funcao auxiliar getDailyChartForSymbol para todos os simbolos inseridos pelo usuario
  return Promise.all(symbols.map(symbol => getDailyChartForSymbol(symbol)));
};



// export const getMonthlyChartForSymbol = (symbol) => {
//   return axiosInstance.get('', {
//     params: {
//       function: 'TIME_SERIES_MONTHLY',
//       symbol,
//       apikey: process.env.REACT_APP_API_KEY
//     }
//   }).then(response => {
//     const data = response.data["Monthly Time Series"];
//     return data.map(dataPoint => ({
//       x: new Date(dataPoint.date),
//       label: new Date(dataPoint.date),
//       y: parseFloat(dataPoint["4. close"]),
//     }))
//   })
// };