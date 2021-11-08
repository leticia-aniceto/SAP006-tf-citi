import { useEffect, useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import {getDailyChartForSymbol} from "../services/alphavantage.js"


//var CanvasJS = CanvasJSReact.CanvasJS;
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
 <CanvasJSChart
 options = { {
   axisX: {
     scaleBreaks:{
       spacing: 0,
       fillOpacity: 0,
       lineThickness: 0,
       customBreaks: stockData.reduce((breaks, value, index, array) => {
          const currentDataPointUnix = Number(new Date (value.date));
          const previousDataPointUnix = Number(new Date(array[index - 1].date));

          const oneDayInMs = 86400000;
          const difference = previousDataPointUnix - currentDataPointUnix;

          return difference === oneDayInMs
            ? breaks
            : [
              ...breaks,
              {
                startValue: currentDataPointUnix,
                endValue: previousDataPointUnix - oneDayInMs
              }
            ]
       }, [])
     }
   },
   data: [
     {
       type: 'candlestick',
       dataPoints: stockData.map(stockData => ({
         x: new Date(stockData.date),
         y: [
           stockData.open,
           stockData.high,
           stockData.low,
           stockData.close
         ]
       }))
     }
   ]
 }

 }
 />
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