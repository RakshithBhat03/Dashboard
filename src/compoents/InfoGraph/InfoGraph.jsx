import Chart from "react-apexcharts";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { graphData } from "../../constants/constants";

export const InfoGraph = () => {
  return (
    <div className="row-span-3 col-span-3 pr-4 pt-4 shadow-card flex flex-col justify-between">
      <header className="flex justify-between items-center mx-4">
        <h2 className="text-md font-light">Total revenue</h2>
        <ToggleButton toggleBetween={["Month", "Week"]} />
      </header>
      <Chart
        options={graphData.options}
        series={graphData.series}
        type="line"
        height={"280px"}
      />
    </div>
  );
};
