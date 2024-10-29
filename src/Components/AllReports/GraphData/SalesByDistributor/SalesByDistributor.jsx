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

const SalesByDistributor = () => {
  const data = {
    labels: ["Dhamma", "Sahil", "Ranjit", "Manish", "Rupesh", "Ankit"],
    datasets: [
      {
        label: "Sales",
        data: [55543, 48653, 37965, 25591, 51473, 20544],
        backgroundColor: "blue",
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
      <h2>Sales by Distributor</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesByDistributor;
