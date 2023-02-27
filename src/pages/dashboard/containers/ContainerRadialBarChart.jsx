import RadialBarChart from "../../../components/charts/RadialBarChart";
import { Box } from "@mui/system";
import { radialData } from "../../../data/chartData_Radial";
import "./dashboard.css";

const ContainerRadialBarChart = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"220px"}
      height={"220px"}
    >
      <h1>20 %</h1>
      <h2>Performance Issues</h2>

      <h1>100 %</h1>
      <h2>CPU Load</h2>

      <RadialBarChart data={radialData}></RadialBarChart>
    </Box>
  );
};

export default ContainerRadialBarChart;
