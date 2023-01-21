import Chart from "react-apexcharts";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { graphData } from "../../constants/constants";

export const InfoGraph = () => {
  return (
    <div className="row-span-3 col-span-3 shadow-card">
      <div>
        <Chart
          options={graphData.options}
          series={graphData.series}
          type="line"
          width={"650px"}
          height={"320px"}
        />
      </div>
    </div>
  );
};
