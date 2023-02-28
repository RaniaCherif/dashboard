import { ResponsiveBar } from "@nivo/bar";


const BarChart = ({ data  }) => (
      <div style={{ width: "350px", height: "180px" }}>
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 30, right: 90, bottom: 30, left: 30 }}
    padding={0.25}
    innerPadding={1}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "purple_orange" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 3,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -35,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["opacity", "3"]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 2,
      tickPadding: 2,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 20,
    }}
    axisLeft={{
      tickSize: 2,
      tickPadding: 3,
      tickRotation: 0,
      legend: "food",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={36}
    labelSkipHeight={36}
    labelTextColor={{
      from: "color",
      modifiers: [["opacity", "3"]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 110,
        translateY: 1,
        itemsSpacing: 10,
        itemWidth: 90,
        itemHeight: 8,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 13,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={function (e) {
      return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
    }}
  />
  </div>
);
export default BarChart;
