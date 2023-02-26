import { ResponsivePie } from "@nivo/pie";
import { Box } from "@mui/system";

const PieChart = ({ data }) => (
  <Box width={250} height={170}>
    <ResponsivePie
      data={data}
      margin={{ top: 25, right: 0, bottom: 45, left: 0 }}
      startAngle={48}
      innerRadius={0.75}
      padAngle={6}
      cornerRadius={4}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "purple_orange" }}
      borderWidth={3}
      borderColor={{
        from: "color",
        modifiers: [["brighter", "3"]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextOffset={9}
      arcLinkLabelsTextColor="#e5d2d2"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.45}
      arcLabelsSkipAngle={17}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: -14,
          translateY: 40,
          itemsSpacing: 3,
          itemWidth: 67,
          itemHeight: 16,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 9,
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
export default PieChart;
