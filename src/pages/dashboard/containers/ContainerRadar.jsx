import RadarChart from "../../../components/charts/RadarChart";
import { Box } from "@mui/system";
import { RadarData } from "../../../data/chartData_RadarData";
import "./dashboard.css";

const ContainerRadar = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"300px"}
      height={"160px"}
    >
      <RadarChart data={RadarData}></RadarChart>
    </Box>
  );
};

export default ContainerRadar;
