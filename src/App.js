import TopBar from "./pages/navbar/TopBar";
/*import SideBar from "./pages/navbar/SideBar.tsx";*/
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import ContainerRadialBarChart from "./pages/dashboard/containers/ContainerRadialBarChart";
import ContainerRadar from "./pages/dashboard/containers/ContainerRadar";
import ContainerFunnel from "./pages/dashboard/containers/ContainerFunnel";
import ContainerPie from "./pages/dashboard/containers/ContainerPie";
import { Box } from "@mui/system";
import ContainerLine from "./pages/dashboard/containers/ContainerLine";
import ContainerEarth from "./pages/dashboard/containers/ContainerEarth";
import Container1 from "./pages/dashboard/containers/Container1";
import Container2 from "./pages/dashboard/containers/Container2";
import Container3 from "./pages/dashboard/containers/Container3";

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

              <Box display={"flex"} flexWrap={"wrap"} width={"100%"} gap={2}>
                <ContainerPie></ContainerPie>
                <ContainerLine></ContainerLine>
                <Box
                  display={"flex"}
                  flexWrap={"wrap"}
                  alignContent={"flex-start"}
                  width={"310px"}
                >
                  <Container1></Container1>
                  <Container2></Container2>
                </Box>

                <Box display={"flex"} flexDirection={"column"}>
                  <ContainerPie></ContainerPie>
                  <ContainerRadar></ContainerRadar>
                </Box>

                <ContainerEarth></ContainerEarth>
                <ContainerRadialBarChart></ContainerRadialBarChart>
              </Box>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
