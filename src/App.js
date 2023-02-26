import TopBar from "./pages/navbar/TopBar";
/*import SideBar from "./pages/navbar/SideBar.tsx";*/
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useState } from "react";
import MyResponsiveRadialBar from "./components/charts/MyResponsiveRadialBar";
import { radialData, radialData2, radialData3, radialData4 } from "./components/charts/data";

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
              <div style={{ display: "flex" }}>
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
              </div>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
