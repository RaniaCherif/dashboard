import LineChart from "../../../components/charts/LineChart";
import { Box } from "@mui/system";
import { LineData } from "../../../data/chartData_LineData";
const ContainerLine = () => {
  return (
    <Box sx={{ boxShadow: "10px 10px 12px -6px black" }}>
      <LineChart data={LineData}></LineChart>
    </Box>
  );
};

export default ContainerLine;
