import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesByCompany = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales by Company",
        data: [
          10000, 12000, 15000, 13000, 14000, 17000, 16000, 18000, 19000, 21000,
          22000, 24000,
        ],
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        tension: 0.3,
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
      <h2>Sales by Company</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesByCompany;
