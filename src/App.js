import TopBar from "./pages/navbar/TopBar";
/*import SideBar from "./pages/navbar/SideBar.tsx";*/
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import { Box } from "@mui/system";
import ContainerRadialBarChart from "./pages/dashboard/containers/ContainerRadialBarChart";
import ContainerRadar from "./pages/dashboard/containers/ContainerRadar";
import ContainerPie from "./pages/dashboard/containers/ContainerPie";
import ContainerLine from "./pages/dashboard/containers/ContainerLine";
import ContainerEarth from "./pages/dashboard/containers/ContainerEarth";
import ContainerBarChart from "./pages/dashboard/containers/ContainerBarChart";
import Container1 from "./pages/dashboard/containers/Container1";
import Container2 from "./pages/dashboard/containers/Container2";
import Container3 from "./pages/dashboard/containers/Container3";
import Contacts from "./pages/utilities/Contacts";

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

              <Box display={"flex"} flexWrap={"wrap"} width={"100%"} gap={1}>
                <ContainerPie></ContainerPie>
                <ContainerLine className="bibi" test={[10, 20, 12, 52, 27]} ></ContainerLine>
                <Box
                  display={"flex"}
                  flexWrap={"wrap"}
                  alignContent={"flex-start"}
                  width={"310px"}
                  gap={1}
                >
                  <Container1></Container1>
                  <Container2></Container2>
                  <Container3></Container3>
                </Box>
                <Box display={"flex"} flexDirection={"column"}>
                  <ContainerPie></ContainerPie>
                  <ContainerRadar></ContainerRadar>
                </Box>
                <ContainerEarth></ContainerEarth>
                <Box display={"flex"} flexDirection={"column"} gap={1} >
                  <ContainerRadialBarChart></ContainerRadialBarChart>
                  <ContainerBarChart></ContainerBarChart>
                </Box>
              </Box>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
