import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import Tweets from "./Tweets";
import ExploreInHome from "./ExploreInHome";

const drawerWidth = 320;

const HomeAppBar = styled(AppBar)(() => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: `${drawerWidth}px`,
  background: "transparent",
  boxShadow: "none",
  backdropFilter: "blur(12px)",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main")((theme) => ({
  marginRight: "320px",
}));

const BoxHome = styled(Box)((theme) => ({
  width: "100%",
  boxSizing: "border-box",
  // display: "flex",
}));

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <BoxHome>
        <HomeAppBar color="default" position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Toolbar>
        </HomeAppBar>
        <Main>
          <DrawerHeader />
          <Tweets />
        </Main>
      </BoxHome>
      <ExploreInHome />
    </>
  );
};

export default Home;
