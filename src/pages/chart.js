import { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { getDailyChartForSymbols } from "../services/alphavantage.js";

/* props desestruturadas */
const Chart = ({ symbols, startDate, endDate, compare }) => {

  /* state para controlar os dados do gráfico */
  const [stockData, setStockData] = useState([]);

  /* hook para capturar alterações na prop compare para então, caso todas as outras props estiverem preenchidas,
   fazer a chamada da função interna fetchStockData que faz a chamada da função getDailyChartForSymbols em alphavantage.js
   e atualiza o state que controla os dados do grafico */
  useEffect(() => {
    const fetchStockData = async (symbols, startDate, endDate) => {
      const stockData = await getDailyChartForSymbols(symbols, startDate, endDate);
      setStockData(stockData);
    };
    if (symbols && startDate && endDate) fetchStockData(symbols, startDate, endDate);
  }, [compare]);

  // useEffect(() => {
  //   const fetchStockDataTwo = async () => {
  //     const resultTwo = await getDailyChartForSymbol('GOOG')
  //     setStockDataTwo(formatStockData(resultTwo.data['Time Series (Daily)']))
  //   }
  //   fetchStockDataTwo()
  // }, []);
  // console.log(stockDataTwo)

  return (
    <CanvasJSChart
      options={{
        title: {
          text: "Fechamento diário",
          fontFamily: "tahoma",
          fontSize: 20

        },
        height: 400,
        axisX: {
          valueFormatString: "MMM YYYY",
          // crosshair do eixo X
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "MMM YYYY"
          }
        },
        axisY: {
          title: "Valor",
          prefix: "$",
          // crosshair do eixo Y
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "$#",
          }

        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          verticalAlign: "top",
          horizontalAlign: "center",
          // inverte a visibilidade das linhas quando se clica nos itens da legenda
          itemclick: (e) => {
            if (e.dataSeries.visible) e.dataSeries.visible = false;
            else e.dataSeries.visible = true;
            e.chart.render();
          }
        },
        /* processa dados obtidos da api para mostrar as linhas relativas a cada ação selecionada*/
        data: stockData.map((action) => ({
          type: "line",
          name: action.symbol, // simbolo da ação para lgenda
          markerType: "circle",
          markerSize: 4,
          showInLegend: true,
          markerBorderThickness: 0,
          dataPoints: action.data.map((dataPoint) => ({
            label: new Date(dataPoint.date),
            x: new Date(dataPoint.date),
            y: dataPoint.price
          }))
        }))

        // data: [
        //   {
        //     type: "line",
        //     name: "Apple",
        //     markerType: "circle",
        //     markerSize: 4,
        //     showInLegend: true,
        //     markerBorderThickness: 0,
        //     dataPoints: stockData.map((stockData) => ({
        //       x: new Date(stockData.date),
        //       label: new Date(stockData.date),

        //       // The OHLC for the data point
        //       // The order is IMPORTANT!  
        //       y: stockData.close,
        //     })),
        //   },
        //   {
        //     type: "line",
        //     name: "Google",
        //     showInLegend: true,
        //     markerSize: 5,

        //     dataPoints: stockData.map((stockData) => ({
        //       x: new Date(stockData.date),
        //       // The OHLC for the data point
        //       // The order is IMPORTANT!
        //       label: new Date(stockData.date),
        //       y: stockData.close - 50,
        //     })),
        //   },
        // ],
      }}
    />
  );
};

// function formatStockData(stockData) {
//   return Object.entries(stockData).map((entries) => {
//     const [date, priceData] = entries;
//     return {
//       date,
//       open: Number(priceData["1. open"]),
//       high: Number(priceData["2. high"]),
//       low: Number(priceData["3. low"]),
//       close: Number(priceData["4. close"]),
//     };
//   });
// }


export default Chart;