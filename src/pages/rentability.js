import { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { getDailyChartForSymbolsTwo } from "../services/alphavantage.js";

/* props desestruturadas */
const Rentability = ({ symbols, startDate, endDate, compare }) => {

  function logReturn(precoAtual, precoAnterior) {
    const result = Math.log(precoAtual / (precoAnterior -1))
    return result
   }

  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async (symbols, startDate, endDate) => {
      const stockData = await getDailyChartForSymbolsTwo(symbols, startDate, endDate);
      setStockData(stockData);
    };
    if (symbols && startDate && endDate) fetchStockData(symbols, startDate, endDate);
  }, [compare]);


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
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            valueFormatString: "MMM YYYY"
          }
        },
        axisY: {
          title: "Valor",
          prefix: "$",
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

          itemclick: (e) => {
            if (e.dataSeries.visible) e.dataSeries.visible = false;
            else e.dataSeries.visible = true;
            e.chart.render();
          }
        },
    
        data: stockData.map((action) => ({
          type: "dashed",
          name: action.symbol, 
          markerType: "circle",
          markerSize: 4,
          showInLegend: true,
          markerBorderThickness: 0,
          dataPoints: action.data.map((dataPoint) => ({
            label: new Date(dataPoint.date),
            x: new Date(dataPoint.date),
            y: logReturn(dataPoint.price, dataPoint.priceopen)
          }))
        }))

      }}
    />
  );
};


export default Rentability;