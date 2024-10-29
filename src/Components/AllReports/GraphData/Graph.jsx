import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import slt from "./ReportGraph.module.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  // Line chart for 'Sales by Company'

  const lineData = {
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
        borderColor: "#5A9BD5",
        backgroundColor: "#5A9BD5",
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        offset: true,
        grid: {
          display: false, // Hide X-axis grid
        },
      },
      y: {
        grid: {
          display: false, // Hide Y-axis grid
        },
        display: false,
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales by Company", // Chart title
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#007bff", // Tooltip color
      },
    },
  };
  // Bar chart for 'Sales by SalesPerson'
  const salesPersonData = {
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
        // backgroundColor: "green",
        backgroundColor: "#6AB547", // Green color for bars
        barThickness: 20, // Thickness of each bar
      },
    ],
  };
  const optionsHBar = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales by SalesPerson", // Chart title
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#007bff",
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
          color: "#333", // Color of X-axis labels
        },
        grid: {
          display: false, // Hide X-axis grid lines
        },
        display: false,
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
          color: "#333", // Color of Y-axis labels
          padding: 10, // Increase padding for readability
        },
        grid: {
          display: false, // Hide Y-axis grid lines
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      },
    },
  };

  // Bar chart for 'Sales by Region'
  const regionData = {
    labels: ["East", "West", "North", "South"],
    datasets: [
      {
        label: "Sales",
        data: [113230, 59230, 210230, 284230],
        backgroundColor: "#F4B184",
      },
    ],
  };

  const optionsVBar = {
    // responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Sales by Region", // Chart title
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#007bff",
      },
      datalabels: {
        anchor: "end",
        align: "end",
        color: "#333",
        font: {
          size: 12,
          weight: "bold",
        },
        formatter: (value) => value.toLocaleString(), // Format numbers with commas
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide X-axis grid lines
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#333", // Color of X-axis labels
        },
      },
      y: {
        display: false, // Hide Y-axis
      },
    },
    layout: {
      padding: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20,
      },
    },
  };

  // Bar chart for 'Sales by Product'
  const productData = {
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
        backgroundColor: "#FDDA65",
      },
    ],
  };

  // Bar chart for 'Sales by Distributor'
  const distributorData = {
    labels: ["Dhamma", "Sahil", "Ranjit", "Manish", "Rupesh", "Ankit"],
    datasets: [
      {
        label: "Sales",
        data: [55543, 48653, 37965, 25591, 51473, 20544],
        backgroundColor: "#5A9BD5",
      },
    ],
  };
  return (
    <div className="container mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
          <h1 className="text-[25px] font-semibold cursor-pointer pl-2">
            All Sell&#39;s Report
          </h1>
        </div>
        <div>
          <span className="text-[#8596FE] mx-1">from</span>
          <input type="date" className={slt.calendar} />{" "}
          <span className="text-[#8596FE]">to</span>{" "}
          <input type="date" className={slt.calendar} />
        </div>
      </div>

      <div>
        <div className="my-2 bg-white">
          <Line data={lineData} options={options} height={80} />
        </div>

        <div>
          <div className="flex justify-between">
            <div className="bg-white w-[49%]">
              {/* <h4>Sales by SalesPerson</h4> */}
              <Bar data={salesPersonData} options={optionsHBar} height={230} />
            </div>

            <div className="bg-white w-[49%]">
              {/* <h4>Sales by Region</h4> */}
              <Bar data={regionData} options={optionsVBar} height={230} />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between">
            <div className="bg-white w-[49%]">
              {/* <h4>Sales by SalesPerson</h4> */}
              <Bar data={productData} options={optionsHBar} height={230} />
            </div>

            <div className="bg-white w-[49%]">
              {/* <h4>Sales by Region</h4> */}
              <Bar data={distributorData} options={optionsVBar} height={230} />
            </div>
          </div>
        </div>

        {/* <div>
          <div>
            <h4>Sales by Product</h4>
            <Bar data={productData} />
          </div>
          <div>
            <h4>Sales by Distributor</h4>
            <Bar data={distributorData} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Graph;
