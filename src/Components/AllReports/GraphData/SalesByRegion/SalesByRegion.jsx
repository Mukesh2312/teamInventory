import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesByRegion = () => {
  const data = {
    labels: ["East", "West", "North", "South"],
    datasets: [
      {
        label: "Sales",
        data: [113230, 59230, 210230, 284230],
        backgroundColor: "orange",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        ticks: {
          display: false, // Hide Y-axis labels
        },
        grid: {
          drawBorder: false, // Optional: Hide Y-axis grid lines if needed
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <h2>Sales by Region</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesByRegion;
