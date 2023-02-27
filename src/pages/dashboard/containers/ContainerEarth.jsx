import EarthChart from "../../../components/charts/EarthChart";
import { Box } from "@mui/system";
import { earthData } from "../../../data/chartData_EarthData";
const ContainerEarth = () => {
  return (
    <Box sx={{ boxShadow: "10px 10px 12px -6px black", borderRadius: "2rem" }}>
      <EarthChart data={earthData}></EarthChart>
    </Box>
  );
};

export default ContainerEarth;
