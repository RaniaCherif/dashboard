import RadarChart from "../../../components/charts/RadarChart";
import { Box } from "@mui/system";
import { RadarData } from "../../../data/chartData_RadarData";
import "./dashboard.css";

const ContainerRadar = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"300px"}
      height={"220px"}
    >
       <Box display={"flex"} flex={"center"} width={"120px"} marginTop={"5px"} >
      <h1>Statitic Graph</h1>
      </Box>
     

      <RadarChart data={RadarData}></RadarChart>
    </Box>
  );
};

export default ContainerRadar;
