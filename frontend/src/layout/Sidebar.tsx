import { FC } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Button,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import {
  Bookmark,
  Email,
  Notifications,
  Person,
  Tag,
} from "@mui/icons-material";

const Sidebar: FC<{ drawerWidth: number }> = (props) => {
  const drawerItems: Array<[string, JSX.Element]> = [
    ["Home", <HomeIcon />],
    ["Explore", <Tag />],
    ["Notification", <Notifications />],
    ["Messages", <Email />],
    ["Bookmarks", <Bookmark />],
    ["Profile", <Person />],
  ];
  const drawerWidth = props.drawerWidth;

  const drawerContent = (
    <>
      <List>
        {drawerItems.map(([text, icon], idx) => {
          return (
            <ListItemButton
              key={text}
              sx={{
                paddingTop: 1.5,
                paddingLeft: 5,
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          );
        })}
        <ListItem
          key={"tweet"}
          sx={{
            paddingTop: 1.5,
            paddingLeft: 5,
          }}
        >
          <Button
            variant="contained"
            disableElevation
            style={{
              width: "70%",
              height: 40,
              borderRadius: 2000,
            }}
          >
            Tweet
          </Button>
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
      anchor="left"
      open={true}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
