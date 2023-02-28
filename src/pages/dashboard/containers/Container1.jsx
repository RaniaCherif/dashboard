import { Box } from "@mui/system";
import "./dashboard.css";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

const Container1 = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"200px"}
      height={"65px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        alignItems={"flex-start"}
        width={"120px"}
        height={"65px"}
      >
        <h2 style={{ marginBottom: "0.25rem", fontSize: "10px" }}>Revenue</h2>
        <h1>
          $52850 <span>+5.8</span>
        </h1>

        <h5 style={{ margin: 0 }}>12% since last month</h5>
      </Box>

      <DiamondOutlinedIcon
        sx={{
          fontSize: 40,
          alignSelf: "center",
          fill: "#6d1b7b",
        }}
      ></DiamondOutlinedIcon>
    </Box>
  );
};

export default Container1;
