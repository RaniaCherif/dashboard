import { ResponsiveLine } from "@nivo/line";
import { Box } from "@mui/system";

const LineChart = ({ data /* see data tab */ }) => (
  <Box width={500} height={210}>
    <ResponsiveLine
      data={data}
      margin={{ top: 15, right: 65, bottom: 45, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: "purple_orange" }}
      lineWidth={1}
      pointSize={3}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor", modifiers: [] }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaBlendMode="hard-light"
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: -2,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 88,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 8,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </Box>
);
export default LineChart;
