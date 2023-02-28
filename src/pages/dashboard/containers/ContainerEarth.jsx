import EarthChart from "../../../components/charts/EarthChart";
import { Box } from "@mui/system";
import { earthData } from "../../../data/chartData_EarthData";
const ContainerEarth = () => {
  return (
    <Box
      className="Container_Base"
      width={"440px"}
      height={"370px"}
    >
      <EarthChart data={earthData}></EarthChart>
    </Box>
  );
};

export default ContainerEarth;
