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

const SalesByProduct = () => {
  const data = {
    labels: [
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5",
      "Product 6",
    ],
    datasets: [
      {
        label: "Sales",
        data: [55543, 53043, 52983, 43669, 43783, 26693],
        backgroundColor: "yellow",
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
      <h2>Sales by Product</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesByProduct;
