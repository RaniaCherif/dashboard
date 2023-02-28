import PieChart from "../../../components/charts/PieChart";
import { Box } from "@mui/system";
import { PieData } from "../../../data/ChartData_PieData";
import "./dashboard.css";

const ContainerPie = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"300px"}
      height={"220px"}
    >
      <Box display={"flex"} flex={"center"} width={"120px"} marginTop={"5px"}>
        <h1>Business Graph</h1>
      </Box>

      <PieChart data={PieData}></PieChart>
    </Box>
  );
};

export default ContainerPie;
