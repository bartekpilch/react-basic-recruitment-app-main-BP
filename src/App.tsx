import React, { useState } from "react";

import { Grid, PaletteMode, ThemeProvider } from "@mui/material";
import { TopBar } from "./components/TopBar/TopBar";
import { LeftNavigation } from "./components/LeftNavigation/LeftNavigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import { Error404 } from "./screens/404";
import { navigationRoutes } from "./navigationRoutes";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = (mode: PaletteMode) => {
    if (mode === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  function getPath() {
    return (
      <>
        <Route
          path={"/competitions"}
          element={<Error404 PAGE_NAME={"competitions"} />}
        />
        <Route
          path={"/scheduling"}
          element={<Error404 PAGE_NAME={"scheduling"} />}
        />
        <Route
          path={"organisations"}
          element={<Error404 PAGE_NAME={"organisations"} />}
        />
        <Route path={"users"} element={<Error404 PAGE_NAME={"users"} />} />
        <Route path={"*"} element={<Error404 />} />
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar theme={theme} />
        <Grid
          container
          item
          xs={12}
          sx={{
            width: "100vw",
            height: "100vh",
            background: theme.palette.background.default,
          }}
        >
          <Grid
            item
            sx={{
              height: 1,
              width: 300,
              background: theme.palette.background.paper,
            }}
          >
            <LeftNavigation />
          </Grid>
          <Grid item xs>
            <Routes>
              {Object.values(navigationRoutes).map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}

              {getPath()}
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
