import EarthChart from "../../../components/charts/EarthChart";
import { Box } from "@mui/system";
import { earthData } from "../../../data/chartData_EarthData";
const ContainerEarth = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"300px"}
      height={"240px"}
    >
      <EarthChart data={earthData}></EarthChart>
    </Box>
  );
};

export default ContainerEarth;
