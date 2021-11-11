import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import moment from 'moment';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  debug: true,
  exclude: {
    query: false,
  }
})

const axiosInstance = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
  adapter: cache.adapter
});

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
  const getDailyChartForSymbol = (symbol, outputsize = "full") => {
    return axiosInstance.get('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        outputsize,
        apikey: '8WBEDC9Z57D44SFK'
      }
    }).then(response => {
      const data = response.data["Time Series (Daily)"];
      if (!data) return [];

      let startDate = moment(start, "YYYY-MM-DD");
      let endDate = moment(end, "YYYY-MM-DD");
      let keys = Object.keys(data).reverse();

      const last = moment(keys[keys.length - 1], "YYYY-MM-DD");
      const first = moment(keys[0], "YYYY-MM-DD");

      if (first.isAfter(endDate)) return [];

      if (first.isAfter(startDate)) startDate = first;
      if (last.isBefore(endDate)) endDate = last;

      const indexOfFirst = binarySearch(keys, startDate.format('YYYY-MM-DD'));
      const indexOfLast = binarySearch(keys, endDate.format('YYYY-MM-DD'));

      return { symbol, data: keys.slice(indexOfFirst, indexOfLast).map(date => ({ date, price: parseFloat(data[date]["4. close"]) })) };
    })
  }
  return Promise.all(symbols.map(symbol => getDailyChartForSymbol(symbol)));
};

export const searchName = (searchUser) => {
  return axiosInstance.get('', {
    params: {
      function: 'SYMBOL_SEARCH',
      apikey: '8WBEDC9Z57D44SFK',
      keywords: searchUser
    }
  })
}

export const searchStock = (symbol) => {
  return axiosInstance.get('', {
    params: {
      function: 'GLOBAL_QUOTE',
      apikey: '8WBEDC9Z57D44SFK',
      symbol: symbol
    }
  })
}

export const getDailyChartForSymbolsTwo = (symbols, start, end) => {
  const getDailyChartForSymbol = (symbol, outputsize = "full") => {
    return axiosInstance.get('', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol,
        outputsize,
        apikey: '8WBEDC9Z57D44SFK'
      }
    }).then(response => {
      const data = response.data["Time Series (Daily)"];
      console.log(data);
      if (!data) return [];

      let startDate = moment(start, "YYYY-MM-DD");
      let endDate = moment(end, "YYYY-MM-DD");
      let keys = Object.keys(data).reverse();

      const last = moment(keys[keys.length - 1], "YYYY-MM-DD");
      const first = moment(keys[0], "YYYY-MM-DD");

      if (first.isAfter(endDate)) return [];

      if (first.isAfter(startDate)) startDate = first;
      if (last.isBefore(endDate)) endDate = last;

      const indexOfFirst = binarySearch(keys, startDate.format('YYYY-MM-DD'));
      const indexOfLast = binarySearch(keys, endDate.format('YYYY-MM-DD'));

      return {
        symbol, data: keys.slice(indexOfFirst, indexOfLast).map(date => ({
          date, price: parseFloat(data[date]["4. close"]), priceopen: parseFloat(data[date]["1. open"]),
        }))
      };
    })
  }
  return Promise.all(symbols.map(symbol => getDailyChartForSymbol(symbol)));
};
