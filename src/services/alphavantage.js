import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.alphavantage.co/query'
});

export const getDailyChartForSymbol = (symbol) => {
  return axiosInstance.get('', {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      apikey:'T76M1J47E0ZCANSU'
    }
  })
};

export const getMonthlyChartForSymbol = (symbol) => {
  return axiosInstance.get('', {
    params: {
      function: 'TIME_SERIES_MONTHLY',
      symbol,
      apikey:'T76M1J47E0ZCANSU'
    }
  })
};

/*const apiKey = 'T76M1J47E0ZCANSU'

export const apiMensal = (symbol)=> { return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${symbol}&apikey=${apiKey}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
};

  export const apiDiario = (symbol)=> { return axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${apiKey}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
};

 */ 