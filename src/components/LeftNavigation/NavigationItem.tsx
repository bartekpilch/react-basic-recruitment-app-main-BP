import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FC, ReactElement } from "react";

type NavigationItemProp = {
  to: string;
  icon: ReactElement<SvgIconComponent>;
  label: string;
};

export const NavigationItem: FC<NavigationItemProp> = ({ to, icon, label }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon sx={{ color: "#757575" }}>{icon}</ListItemIcon>
        <ListItemText sx={{ color: "#393939", borderBottom: "none" }}>
          {label}
        </ListItemText>
      </ListItemButton>
    </Link>
  );
};
