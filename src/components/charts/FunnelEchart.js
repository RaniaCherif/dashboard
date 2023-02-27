import { ResponsiveFunnel } from "@nivo/funnel";
import { Box } from "@mui/system";

const FunnelEchart = ({ data }) => (
  <Box width={450} height={250}>
    <ResponsiveFunnel
      data={data}
      margin={{ top: 50, right: 20, bottom: 20, left: 20 }}
      shapeBlending={0.76}
      spacing={7}
      valueFormat=" >-.4s"
      colors={{ scheme: "purple_orange" }}
      borderWidth={15}
      borderColor={{ from: "color", modifiers: [] }}
      borderOpacity={0.65}
      labelColor={{
        from: "color",
        modifiers: [["darker", "3"]],
      }}
      enableBeforeSeparators={false}
      beforeSeparatorLength={100}
      beforeSeparatorOffset={20}
      enableAfterSeparators={false}
      afterSeparatorLength={92}
      afterSeparatorOffset={14}
      currentPartSizeExtension={24}
      currentBorderWidth={40}
      motionConfig={{
        mass: 86,
        tension: 500,
        friction: 500,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      }}
    />
  </Box>
);
export default FunnelEchart;
