import TopBar from "./pages/navbar/TopBar";
/*import SideBar from "./pages/navbar/SideBar.tsx";*/
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import ContainerRadialBarChart from "./pages/dashboard/containers/ContainerRadialBarChart";
import { earthData } from "./data/chartData_EarthData";
import EarthChart from "./components/charts/EarthChart";
import { RadarData } from "./data/chartData_RadarData";
import RadarChart from "./components/charts/RadarChart";
import { PieData } from "./data/ChartData_PieData";
import PieChart from "./components/charts/PieChart";
import { Box } from "@mui/system";
import ContainerLine from "./pages/dashboard/containers/ContainerLine";

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

              <Box className="" style={{ display: "flex", flexWrap: "wrap" }}>
                <ContainerRadialBarChart ></ContainerRadialBarChart>
                <RadarChart data={RadarData}></RadarChart>
                <PieChart data={PieData}></PieChart>
                <EarthChart data={earthData}></EarthChart>
                <ContainerLine></ContainerLine>
              </Box>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
