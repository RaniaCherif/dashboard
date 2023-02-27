import TopBar from "./pages/navbar/TopBar";
/*import SideBar from "./pages/navbar/SideBar.tsx";*/
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import ContainerRadialBarChart from "./pages/dashboard/containers/ContainerRadialBarChart";
import ContainerRadar from "./pages/dashboard/containers/ContainerRadar";
import { earthData } from "./data/chartData_EarthData";
import EarthChart from "./components/charts/EarthChart";
import ContainerPie from "./pages/dashboard/containers/ContainerPie";
import { Box } from "@mui/system";
import ContainerLine from "./pages/dashboard/containers/ContainerLine";
import ContainerEarth from "./pages/dashboard/containers/ContainerEarth";

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
                <ContainerRadialBarChart></ContainerRadialBarChart>
                <ContainerRadar></ContainerRadar>
                <ContainerLine></ContainerLine>
                <ContainerPie></ContainerPie>
                <ContainerEarth></ContainerEarth>
              </Box>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
