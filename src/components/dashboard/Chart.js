import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Chart = ({data}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
 

  const options = {
    cutoutPercentage: 70, 
    responsive: true,
    // maintainAspectRatio:false,
    plugins: {
      legend: {
        position: window.innerWidth < 600 ? 'bottom' : 'right',
        align: "center",
        labels: {
          boxWidth: 70,
          boxHeight: 20,
        },
      },
    },
  };
  return (
    <div className="w-[fit-content] h-[auto] md:w-[400px] lg:w-[500px] lg:h-[400px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;

