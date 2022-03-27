import { FC } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Button,
  IconButton,
  ListItemButton,
  Stack,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tag } from "@mui/icons-material";

// Icons
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { HiHome as HomeIcon } from "react-icons/hi";
import { RiHashtag as Hash } from "react-icons/ri";
import {
  IoNotificationsOutline as NotificationBell,
  IoMailOutline as Mail,
  IoPersonOutline as Person,
  IoEllipsisHorizontalCircleOutline as MoreIcon,
} from "react-icons/io5";
import { BsBookmark as Bookmark } from "react-icons/bs";

const Sidebar: FC<{ drawerWidth: number }> = (props) => {
  const drawerItems: Array<[string, JSX.Element]> = [
    ["Home", <HomeIcon size={30} />],
    ["Explore", <Hash size={30} />],
    ["Notification", <NotificationBell size={30} />],
    ["Messages", <Mail size={30} />],
    ["Bookmarks", <Bookmark size={30} />],
    ["Profile", <Person size={30} />],
    ["More", <MoreIcon size={30} />]
  ];
  const drawerWidth = props.drawerWidth;

  const ItemBox = styled(Box)((theme) => ({
    width: `80%`,
    height: "50px",
    marginTop: "12px",
  }));

  const ItemButton = styled(Button)((theme) => ({
    borderRadius: 2000,
    height: "50px",
  }));

  const TweetButton = styled(Button)((theme) => ({
    width: "100%",
    height: "100%",
    borderRadius: 2000,
  }));

  const drawerContent = (
    <>
      <Stack direction="column" alignItems="center">
        <ItemBox>
          <IconButton color="primary">
            <TwitterIcon size={30} />
          </IconButton>
        </ItemBox>
        {drawerItems.map(([text, icon]) => (
          <ItemBox>
            <ItemButton color="inherit">
              <Stack direction="row" alignItems="center">
                <Box display={"flex"} marginRight="16px">
                  {icon}
                </Box>
                <Typography marginRight={"8px"} fontWeight={700}>
                  {text}
                </Typography>
              </Stack>
            </ItemButton>
          </ItemBox>
        ))}
        <ItemBox>
          <TweetButton variant="contained" disableElevation>
            <Typography fontWeight={700}>
              Tweet
            </Typography>
          </TweetButton>
        </ItemBox>
      </Stack>
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
