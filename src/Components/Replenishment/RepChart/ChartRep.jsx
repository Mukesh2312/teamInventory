import React, { useState } from "react";
import styles from "./ChartRep.module.css";
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

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartRep = () => {
  const [timeRange, setTimeRange] = useState("year");
  const dataByTimeRange = {
    week: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Sale",
          data: [5000, 7000, 9000, 11000],
          borderColor: "#00FF1A",
          backgroundColor: "rgba(0, 255, 0, 0.1)",
          tension: 0.4,
        },
        {
          label: "Inventory",
          data: [4000, 6000, 8500, 9500],
          borderColor: "#9E00FF",
          backgroundColor: "rgba(128, 0, 128, 0.1)",
          tension: 0.4,
        },
      ],
    },
    month: {
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
          label: "Sale",
          data: [
            20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
            110000, 120000, 130000,
          ],
          borderColor: "#00FF1A",
          backgroundColor: "rgba(0, 255, 0, 0.1)",
          tension: 0.4,
        },
        {
          label: "Inventory",
          data: [
            15000, 25000, 35000, 45000, 55000, 65000, 75000, 85000, 95000,
            105000, 115000, 125000,
          ],
          borderColor: "#9E00FF",
          backgroundColor: "rgba(128, 0, 128, 0.1)",
          tension: 0.4,
        },
      ],
    },
    year: {
      labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Sale",
          data: [20000, 50000, 75000, 120000, 150000, 180000, 160000],
          borderColor: "#00FF1A",
          backgroundColor: "rgba(0, 255, 0, 0.1)",
          tension: 0.4,
        },
        {
          label: "Inventory",
          data: [15000, 40000, 80000, 100000, 140000, 160000, 120000],
          borderColor: "#9E00FF",
          backgroundColor: "rgba(128, 0, 128, 0.1)",
          tension: 0.4,
        },
      ],
    },
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Sales and Inventory Over ${
          timeRange === "week"
            ? "Weeks"
            : timeRange === "month"
            ? "Months"
            : "Years"
        }`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200000,
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.info}>
        <h2>₹ 15,569.00</h2>
        <span className={styles.percentage}>↓ 223.2%</span>
      </div>

      {/* Dropdown or Buttons to Toggle Between Time Ranges */}
      <div className={styles.timeRangeToggle}>
        <button
          onClick={() => setTimeRange("week")}
          className={timeRange === "week" ? styles.active : ""}
        >
          Week
        </button>
        <button
          onClick={() => setTimeRange("month")}
          className={timeRange === "month" ? styles.active : ""}
        >
          Month
        </button>
        <button
          onClick={() => setTimeRange("year")}
          className={timeRange === "year" ? styles.active : ""}
        >
          Year
        </button>
      </div>

      <div style={{ height: "350px" }} id={styles.canvaContainer}>
        <Line data={dataByTimeRange[timeRange]} options={options} />
      </div>
    </div>
  );
};

export default ChartRep;
