import { ResponsiveRadialBar } from "@nivo/radial-bar";

const RadialBarChart = ({ data /* see data tab */ }) => (
  <div style={{ width: "220px", height: "200px" }}>
    <ResponsiveRadialBar
      data={data}
      valueFormat=">-.2f"
      padding={0.2}
      cornerRadius={2}
      margin={{ top: 20, right: 92, bottom: 20, left: 22 }}
      colors={{ scheme: "purple_orange" }}
      radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
      circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
      labelsTextColor="#a93232"
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 135,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: "left-to-right",
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "square",
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
  </div>
);
export default RadialBarChart;
