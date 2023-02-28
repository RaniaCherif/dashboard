import { Box } from "@mui/system";
import "./dashboard.css";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

const Container3 = () => {
  return (
    <Box
      className="Container_Base Container_Line"
      width={"200px"}
      height={"85px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"nowrap"}
        alignItems={"flex-start"}
        width={"120px"}
        height={"70px"}
      >
        <h2 style={{ marginBottom: "0.25rem", fontSize: "10px" }}>Purchase</h2>
        <h1>
          $2900 <span>+2.3</span>
        </h1>

        <h5 style={{ margin: 0 }}>2.27% since last month</h5>
      </Box>

      <DiamondOutlinedIcon
        sx={{
          fontSize: 40,
          alignSelf: "end",
          marginBottom: "2rem",
          fill: "#6d1b7b",
        }}
      ></DiamondOutlinedIcon>
    </Box>
  );
};

export default Container3;
