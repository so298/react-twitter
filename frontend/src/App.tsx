import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Notif from "./routes/Notification";
import Messages from "./routes/Messages";
import Profile from "./routes/Profile";
import NoMatch from "./routes/NoMatch";
import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./layout/Sidebar";

const App = () => {
  const drawerWidth = 320;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="div" width="100%">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notification" element={<Notif />} />
            <Route path="/message" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default App;
