import { TextField, Box, List, ListItem, Drawer } from "@mui/material";
import { FC } from "react";

const drawerWidth = 320;

const ExploreInHome: FC = () => {
  const drawerContent = (
    <>
      <List>
        <ListItem>
          <TextField
            variant="outlined"
            label="search"
            style={{ width: "90%" }}
          ></TextField>
        </ListItem>
      </List>
    </>
  );
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="right"
      open={true}
    >
      {drawerContent}
    </Drawer>
  );
};

export default ExploreInHome;
