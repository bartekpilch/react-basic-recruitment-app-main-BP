/*
  icon for 'user avatar' can be found here: https://mui.com/material-ui/material-icons/
 */

import Logo from "../../img/logo.svg";
import Switch from "@mui/material/Switch";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Switch demo" } };

type Props = {
  theme: any;
};

export const TopBar: React.FC<Props> = ({ theme }) => {
  return (
    <Box sx={{ mb: 8 }}>
      <AppBar sx={{ background: "#202020", boxSizing: "border-box", m: 0 }}>
        <Toolbar>
          <Typography
            sx={{ height: "40px", display: "inline-flex", flexGrow: 1 }}
          >
            <img src={Logo} alt="" />
          </Typography>

          <Switch {...label} sx={{ mr: 2 }} />
          <SettingsIcon sx={{ mr: 2 }} />
          <AccountCircleIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
