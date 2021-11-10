import { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
import { getDailyChartForSymbolsTwo } from "../services/alphavantage.js";

const Rentability = ({ symbols, startDate, endDate, compareTwo }) => {

  function logReturn(precoAtual, precoAnterior) {
    const result = Math.log(precoAtual / (precoAnterior - 1))
    return result * 100
  }

  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async (symbols, startDate, endDate) => {
      const stockData = await getDailyChartForSymbolsTwo(symbols, startDate, endDate);
      setStockData(stockData);
    };
    if (symbols && startDate && endDate) fetchStockData(symbols, startDate, endDate);
  }, [compareTwo]);


  return (
    <CanvasJSChart
      options={{
        title: {
          text: "Rentabilidade",
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
          title: "Rentabilidade",
          prefix: "%",
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
            if (e.dataSeries.visible === undefined || e.dataSeries.visible) e.dataSeries.visible = false;
            else e.dataSeries.visible = true;
            e.chart.render();
          }
        },

        data: stockData.map((action) => ({
          type: "line",
          name: action.symbol,
          markerType: "circle",
          markerSize: 4,
          showInLegend: true,
          markerBorderThickness: 0,
          dataPoints: action.data?.map((dataPoint) => ({
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