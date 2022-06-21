import { Box, Divider, ListItemText } from "@mui/material";
import { navigationRoutes } from "../../navigationRoutes";
import { NavigationItem } from "./NavigationItem";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

/*
  icons can be found in here: https://mui.com/material-ui/material-icons/
 */

export const LeftNavigation = () => {
  return (
    <Box sx={{ height: 1, width: 300, borderRight: "1px solid #e5e5e5" }}>
      <ListItemText sx={{ ml: 2, mb: 1, mt: 4, color: "#727272" }}>
        Managment
      </ListItemText>

      <NavigationItem
        to={navigationRoutes.dashboard.path}
        icon={<HomeIcon />}
        label={"Dashboard"}
      />
      <NavigationItem
        to={navigationRoutes.sports.path}
        icon={<SportsSoccerIcon />}
        label={"Sports"}
      />

      <NavigationItem
        to={"competitions"}
        icon={<EmojiEventsIcon />}
        label={"Competitions"}
      />

      <Divider sx={{ mt: 4, mb: 2 }} />

      <ListItemText
        sx={{
          ml: 2,
          mb: 1,
          mt: 1,
          color: "#727272",
        }}
      >
        Planning
      </ListItemText>

      <NavigationItem
        to={"scheduling"}
        icon={<EventNoteIcon />}
        label={"Scheduling"}
      />

      <NavigationItem
        to={"organisations"}
        icon={<LocationCityIcon />}
        label={"Organisations"}
      />
      <Divider sx={{ mt: 4, mb: 2 }} />

      <ListItemText sx={{ ml: 2, mb: 1, mt: 1, color: "#727272" }}>
        People
      </ListItemText>
      <NavigationItem
        to={"users"}
        icon={<SupervisedUserCircleIcon />}
        label={"Users"}
      />
    </Box>
  );
};
