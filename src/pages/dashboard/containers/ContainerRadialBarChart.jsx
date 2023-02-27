import RadialBarChart from "../../../components/charts/RadialBarChart";
import { Box } from "@mui/system";
import { radialData } from "../../../data/chartData_Radial";
import "./dashboard.css";

const ContainerRadialBarChart = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"340px"}
      height={"170px"}
    >
      <Box display={"flex"} flexDirection={"column"} height={"120px"} width={"70px"} flexWrap={"wrap"}>
        <h1>20 %</h1>
        <h2>Performance Issues</h2>

        <h1>100 %</h1>
        <h2>CPU Load</h2>
      </Box>

      <RadialBarChart data={radialData}></RadialBarChart>
    </Box>
  );
};

export default ContainerRadialBarChart;
