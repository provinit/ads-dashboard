import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Chart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["40% Male", "35% Female", "25% Unknown"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#FF823C", "#323C46", "#0096FF"],
        hoverBackgroundColor: ["#FF823C", "#323C46", "#0096FF"],
      },
    ],
  };

  const options = {
    cutoutPercentage: 70, 
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          boxWidth: 70,
          boxHeight: 20,
        },
      },
    },
  };
  return (
    <div style={{ width: "500px", height: "500px", border: "1px solid red" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;

//import DataUsageIcon from '@mui/icons-material/DataUsage';
//import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
//import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';