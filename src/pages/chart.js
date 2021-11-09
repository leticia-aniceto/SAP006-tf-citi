import { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { getDailyChartForSymbol } from "../services/alphavantage.js";

const Chart = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol("AAPL");

      setStockData(formatStockData(result.data["Time Series (Daily)"]));
    };
    fetchStockData();
  }, []);
  console.log(stockData);

  return (
    <CanvasJSChart
      options={{
        title: {
            text: "Fechamento diário"
        },
        axisX: {
            valueFormatString: "MMM YYYY"
        },
        axisY2: {
            title: "Valor",
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "center",
            dockInsidePlotArea: true,
        },
        data: [
          {
            type: "line",
            name: "Apple",
            dataPoints: stockData.map((stockData) => ({
              x: new Date(stockData.date),
              // The OHLC for the data point
              // The order is IMPORTANT!
              y: stockData.close,
            })),
          },
          {
            type: "line",
            name: "Google",
            dataPoints: stockData.map((stockData) => ({
              x: new Date(stockData.date),
              // The OHLC for the data point
              // The order is IMPORTANT!
              y: stockData.close - 50,
            })),
          },
        ],
      }}
    />
  );
};

function formatStockData(stockData) {
  return Object.entries(stockData).map((entries) => {
    const [date, priceData] = entries;
    return {
      date,
      open: Number(priceData["1. open"]),
      high: Number(priceData["2. high"]),
      low: Number(priceData["3. low"]),
      close: Number(priceData["4. close"]),
    };
  });
}

export default Chart;
