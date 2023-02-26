// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from "@nivo/geo";
import world from "../../data/world_countries.json";
import { animated, useSpring, useSpringValue } from "@react-spring/core";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveChoropleth = ({ data }) => {

  let worldFeatures = world.features;
  //const x=90;

  /*const x = useSpringValue(0);
  x.start(1);*/

   const [x, set, stop, api] = useSpring(() => ({
    loop: true,
    from: {
      x: 0,
    },
    to: {
      x: 360,
    },
    delay: 100,
  }));

  //api.start({ x:0});

  /*useSpring({
    loop: true,
    from: {
      x: 0,
    },
    to: {
      x: 360,
    },
    delay: 100,
  });*/

  return (
    <div style={{ width: "250px", height: "250px" }}>
      <ResponsiveChoropleth
        data={data}
        features={worldFeatures}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuOr"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionType="orthographic"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[ x , 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "gradient",
            type: "linearGradient",
            colors: [
              {
                offset: 0,
                color: "#000",
              },
              {
                offset: 100,
                color: "inherit",
              },
            ],
          },
        ]}
        fill={[
          {
            match: {
              id: "CAN",
            },
            id: "dots",
          },
          {
            match: {
              id: "CHN",
            },
            id: "lines",
          },
          {
            match: {
              id: "ATA",
            },
            id: "gradient",
          },
        ]}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MyResponsiveChoropleth;
