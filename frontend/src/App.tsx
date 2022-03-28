import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Notif from "./routes/Notification";
import Messages from "./routes/Messages";
import Profile from "./routes/Profile";
import NoMatch from "./routes/NoMatch";
import Bookmarks from "./routes/Bookmarks";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./layout/Sidebar";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(29, 155, 240)",
      }
    },
    mixins: {
      toolbar: {
        minHeight: "53px",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "2000px",
          }
        }
      }
    }
  });

  const drawerWidth = 320;
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "100%" }} top="0px">
        <CssBaseline />
        <Sidebar drawerWidth={drawerWidth} />
        <Box component="div" width="100%">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notification" element={<Notif />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
