import {
  Autorenew,
  ChatBubbleOutline,
  FavoriteBorder,
  IosShare,
} from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  Typography,
  Box,
  styled,
  Divider,
  IconButton,
} from "@mui/material";
import { FC } from "react";
import { Tweet } from "../../types/Tweet";

const dummyTweets: Tweet[] = [
  {
    id: "sample_1",
    user: "sample user 1",
    text: "This is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\n",
  },
  {
    id: "sample_1",
    user: "sample user 1",
    text: "This is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\n",
  },
  {
    id: "sample_1",
    user: "sample user 1",
    text: "This is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\n",
  },
  {
    id: "sample_1",
    user: "sample user 1",
    text: "This is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\n",
  },
  {
    id: "sample_1",
    user: "sample user 1",
    text: "This is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\n",
  },
  {
    id: "sample_1",
    user: "sample user 1",
    text: "This is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\nThis is dummy tweet.\n",
  },
];

const BoxTweetItem = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
  marginRight: "6px",
  marginLeft: "6px",
  cursor: "pointer",
}));

const BoxAvatar = styled(Box)((theme) => ({
  marginRight: "12px",
  marginLeft: "0px",
  alignItems: "center",
  flexGrow: 0,
  flexShrink: 1,
}));

const BoxText = styled(Box)((theme) => ({
  width: "100%",
  flexBasis: "0px",
  flexGrow: 1,
  flexShrink: 0,
}));

const BoxUserInfo = styled(Box)((theme) => ({
  display: "flex",
  fontSize: "15px",
}));

const BoxButtons = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "480px",
}));

const UserName = styled(Typography)((theme) => ({
  fontWeight: 700,
}));

const UserID = styled(Typography)((theme) => ({
  fontWeight: 400,
  marginLeft: "4px",
  color: "rgb(83, 100, 113)",
}));

const TweetItem: FC<Tweet> = (props) => {
  const { text, id, user } = props;
  return (
    <>
      <ListItem button>
        <BoxTweetItem>
          <BoxAvatar>
            <Avatar
              alt="Profile picture"
              src="assets/vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg"
              sx={{ width: 42, height: 42 }}
            />
          </BoxAvatar>
          <BoxText>
            <BoxUserInfo>
              <UserName fontWeight={700}>{user}</UserName>
              <UserID fontWeight={400} marginLeft="4px">{`@${id}`}</UserID>
            </BoxUserInfo>
            <Typography variant="body1">
              {text.split("\n").map((line) => (
                <div>{line}</div>
              ))}
            </Typography>
            <BoxButtons>
              <IconButton>
                <ChatBubbleOutline fontSize="small" />
              </IconButton>
              <IconButton>
                <Autorenew fontSize="small" />
              </IconButton>
              <IconButton>
                <FavoriteBorder fontSize="small" />
              </IconButton>
              <IconButton>
                <IosShare fontSize="small" />
              </IconButton>
            </BoxButtons>
          </BoxText>
        </BoxTweetItem>
      </ListItem>
    </>
  );
};

const Tweets: FC = () => {
  return (
    <>
      <List>
        {dummyTweets.map((elem) => (
          <>
            <TweetItem {...elem} />
            <Divider />
          </>
        ))}
      </List>
    </>
  );
};

export default Tweets;
