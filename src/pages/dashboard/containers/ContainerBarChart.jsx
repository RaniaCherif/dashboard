import BarChart from "../../../components/charts/BarChart";
import { Box } from "@mui/system";
import { BarData } from "../../../data/chartData_BarData";
import "./dashboard.css";

const ContainerBarChart = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"340px"}
      height={"180px"}
    >
      <BarChart data={BarData}></BarChart>
    </Box>
  );
};

export default ContainerBarChart;
