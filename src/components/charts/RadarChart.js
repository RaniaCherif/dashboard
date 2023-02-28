import { ResponsiveRadar } from "@nivo/radar";
import { Box } from "@mui/system";

const RadarChart = ({ data /* see data tab */ }) => (
  <Box width={270} height={170}>
    <ResponsiveRadar
      data={data}
      keys={["chardonay", "carmenere", "syrah"]}
      indexBy="taste"
      valueFormat=">-.2f"
      margin={{ top: 30, right: -60, bottom: 15, left: 8 }}
      borderColor={{ from: "color", modifiers: [] }}
      gridLevels={4}
      gridShape="linear"
      gridLabelOffset={8}
      dotSize={4}
      dotColor={{ theme: "background" }}
      dotBorderWidth={1}
      colors={{ scheme: "nivo" }}
      fillOpacity={0.15}
      motionConfig="default"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: 0,
          translateY: -15,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  </Box>
);
export default RadarChart;