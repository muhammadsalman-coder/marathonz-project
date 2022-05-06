import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

// icons

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// list
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import DashboardIcon from "@mui/icons-material/Dashboard";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import LayersIcon from "@mui/icons-material/Layers";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ColorizeIcon from "@mui/icons-material/Colorize";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Box, Checkbox, Link, Switch } from "@mui/material";

const drawerWidth = 240;
const Drawer2 = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
      [theme.breakpoints.up("sm")]: {
        width: 0,
      },
    }),
  },
}));
const MapDrawer = ({ open, setOpenMapDrawer }) => {
  const [nftTypeListOpen, setNftTypeListOpen] = useState(true);
  return (
    <>
      <Drawer2
        variant="permanent"
        open={open}
        elevation={20}
        sx={{
          "& .css-1kl698n-MuiPaper-root-MuiDrawer-paper": {
            backgroundColor: "#1b2026",
            color: "#a0a4a7",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            //   px: [1],
          }}
        >
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "15px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              transform: "scale(1,0.8)",
              fontWeight: 600,
              // display: "flex",
            }}
          >
            MAP
          </Typography>
          <Link
            variant="body1"
            underline="always"
            component="button"
            sx={{ float: "right" }}
          >
            clear
          </Link>
        </Box>
        <Divider sx={{ backgroundColor: "#000", height: "2px" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "15px",
          }}
        >
          <Typography variant="p" sx={{}}>
            Lite Map <HelpOutlineIcon sx={{ fontSize: "16px" }} />
          </Typography>
          <Box>
            <Switch
              defaultChecked
              color="mycolor"
              sx={{
                "& .MuiSwitch-track": { backgroundColor: "pink" },
              }}
            />
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#000", height: "2px" }} />

        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              sx={{
                color: "#f0f8ff",
                "&.Mui-checked": {
                  color: "#f0f8ff",
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box sx={{ dispaly: "flex" }}>
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#ff5722",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              ></Box>
              For Sale
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              sx={{
                color: "#f0f8ff",
                "&.Mui-checked": {
                  color: "#f0f8ff",
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box sx={{ dispaly: "flex" }}>
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#ffeb3b",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              ></Box>
              Premium
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              // checked={checked}
              // onChange={handleChange}
              sx={{
                color: "#f0f8ff",
                "&.Mui-checked": {
                  color: "#f0f8ff",
                },
              }}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Box sx={{ dispaly: "flex" }}>
              <Box
                sx={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#f0f8ff",
                  display: "inline-block",
                  marginRight: "5px",
                }}
              ></Box>
              On OpenSea
            </Box>
          </Box>
        </Box>
      </Drawer2>
    </>
  );
};

export default MapDrawer;
