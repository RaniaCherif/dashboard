import FunnelEchart from "../../../components/charts/FunnelEchart";
import { Box } from "@mui/system";
import { funnelData } from "../../../data/chartData_FunnelData";
import "./dashboard.css";

const ContainerLine = () => {
  return (
    <Box className="Container_Base  Container_Line" width={150} height={150}>

      <FunnelEchart data={funnelData}></FunnelEchart>
    </Box>
  );
};

export default ContainerLine;
