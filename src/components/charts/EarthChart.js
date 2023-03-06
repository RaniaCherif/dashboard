import { ResponsiveChoropleth } from "@nivo/geo";
import world from "../../data/world_countries.json";
import { Box } from "@mui/system";
import { animated, useSpring, config } from "@react-spring/web";
import { useEffect, useState } from "react";

const EarthChart = ({ data }) => {
  let worldFeatures = world.features;

  const [rotationX, setRotationX] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const Earth = animated(ResponsiveChoropleth);
  /*------React Spring
  
  const rotationTest = useSpring({
    val: 360,
    config: { duration: 10000 },
    from: { val: 0 },
    to: { val: 360 },
    loop: true,
  });
  useEffect(() => {
    setRotation([
      rotationTest.val.interpolate((value) => Math.floor(value)),
      0,
      0,
    ]);
    //console.log("---------- " + rotationTest.val.interpolate((value) => Math.floor(value)) );
  }, [rotationTest.val]);*/

  //-------UseEffect with setInterval function animation
  useEffect(() => {
    // reset when we reach 360
    if (rotationX === 360) setRotationX(0);

    // save intervalId to clear the interval when the component re-renders later
    const intervalId = setInterval(() => {
      setRotationX(rotationX + 1);
      setRotation([rotationX, 0, 0]);
      this.forceUpdate();
    }, 10);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);

    // add rotationX as a dependency to re-rerun the effect
    // when we update it
  }, [rotationX]);

  return (
    <Box width={440} height={370}>
      {/*<animated.div>
        {rotationTest.val.interpolate((value) => Math.floor(value))}
      </animated.div>*/}
      <Earth
        projectionRotation={rotation}
        projectionType="orthographic"
        projectionTranslation={[0.62, 0.5]}
        projectionScale={130}
        forceUpdate
        data={data}
        features={worldFeatures}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="PuOr"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
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
            translateX: 5,
            translateY: -40,
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
    </Box>
  );
};

export default EarthChart;
