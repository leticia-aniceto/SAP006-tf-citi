import { useEffect, useState } from 'react';
import {getDailyChartForSymbol} from "../services/alphavantage.js"

const Chart = () => {
const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol('AAPL')

      setStockData(formatStockData(result.data['Time Series (Daily)']))
    }
    fetchStockData()
  }, []);
  console.log(stockData);
  return (
  <div> </div>
  ) 
};

function formatStockData(stockData) {
  return Object.entries(stockData).map( entries => {
    const [date, priceData] = entries;
    return {
      date,
      open: Number(priceData['1. open']),
      high: Number(priceData['2. high']),
      low: Number(priceData['3. low']),
      close: Number(priceData['4. close'])
    }
  })
}

export default Chart;