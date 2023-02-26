import TopBar from "./pages/navbar/TopBar";
/*import SideBar from "./pages/navbar/SideBar.tsx";*/
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import MyResponsiveRadialBar from "./components/charts/MyResponsiveRadialBar";
import {
  radialData,
  radialData2,
  radialData3,
  radialData4,
} from "./data/chartData_Radial";
import { earthData } from "./data/chartData_EarthData";
import MyResponsiveChoropleth from "./components/charts/MyResponsiveChoropleth";
import { LineData } from "./data/chartData_LineData";
import LineChart from "./components/charts/LineChart";
import { RadarData } from "./data/chartData_RadarData";
import RadarChart from "./components/charts/RadarChart";
import { PieData } from "./data/ChartData_PieData";
import PieChart from "./components/charts/PieChart";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            {/*<SideBar />*/}
            <main className="content">
              <TopBar setIsSidebar={setIsSidebar} />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <MyResponsiveRadialBar
                  data={radialData}
                ></MyResponsiveRadialBar>
                <MyResponsiveRadialBar
                  data={radialData2}
                ></MyResponsiveRadialBar>
                <MyResponsiveRadialBar
                  data={radialData3}
                ></MyResponsiveRadialBar>
                <MyResponsiveRadialBar
                  data={radialData4}
                ></MyResponsiveRadialBar>

                <MyResponsiveChoropleth
                  data={earthData}
                ></MyResponsiveChoropleth>
                <LineChart data={LineData}> </LineChart>
                <RadarChart data={RadarData}></RadarChart>
                <PieChart data={PieData}></PieChart>
              </div>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
