import LineChart from "../../../components/charts/LineChart";
import { Box } from "@mui/system";
import { LineData } from "../../../data/chartData_LineData";
import "./dashboard.css";

const ContainerLine = (props) => {

 
  return (
    <Box className="Container_Base  Container_Line">
      <LineChart data={LineData}></LineChart>
    </Box>
  );
};

export default ContainerLine;
