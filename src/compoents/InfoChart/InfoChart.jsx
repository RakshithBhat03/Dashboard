import { chartData } from "../../constants/constants";
import Chart from "react-apexcharts";
import { ToggleButton } from "../ToggleButton/ToggleButton";
export const InfoChart = () => {
  return (
    <div className="row-span-3 col-span-2 shadow-card p-4 flex flex-col justify-between">
      <header className="flex justify-between items-center">
        <h2 className="text-md font-light">Budget</h2>
        <ToggleButton toggleBetween={["Profitabilty", "Status"]} />
      </header>
      <div>
        <Chart
          height={"300px"}
          options={chartData.options}
          series={chartData.series}
          type="donut"
        />
      </div>
    </div>
  );
};
