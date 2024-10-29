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

const SalesBySalesPerson = () => {
  const data = {
    labels: [
      "Dhamma",
      "Sahil",
      "Ranjit",
      "Manish",
      "Rupesh",
      "Ankit",
      "Vivek",
      "Aditya",
    ],
    datasets: [
      {
        label: "Sales",
        data: [113230, 92110, 82145, 73156, 61193, 49320, 37480, 26000],
        backgroundColor: "green",
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
      <h2>Sales by SalesPerson</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesBySalesPerson;
