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
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { useNavigate } from "react-router-dom";

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
const MarketPlaceDrawer = ({ open, setOpenMarketPlaceDrawer }) => {
  const navigate = useNavigate();
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
        <Typography
          variant="h4"
          sx={{
            margin: "5px 5px 25px 20px",
            transform: "scale(1,0.8)",
            fontWeight: 600,
          }}
        >
          SHOP
        </Typography>
        <List component="nav">
          <ListItemButton
            sx={{
              borderTop: false ? "2px solid #000" : "none",
              borderBottom: false ? "2px solid #000" : "none",
            }}
          >
            <ListItemText
              primary="NFT COLLECTIONS"
              sx={{
                transform: "scale(1,0.8)",
                fontWeight: "bold",
                color: false ? "#fff" : "inherit",
              }}
            />
            {false ? (
              <ExpandLess sx={{ color: "#fff" }} />
            ) : (
              <ExpandMore sx={{ color: "grey" }} />
            )}
          </ListItemButton>
          <ListItemButton
            onClick={() => setNftTypeListOpen(!nftTypeListOpen)}
            sx={{
              borderTop: nftTypeListOpen ? "2px solid #000" : "none",
              borderBottom: nftTypeListOpen ? "2px solid #000" : "none",
            }}
          >
            {/* <ListItemIcon>
        <InboxIcon />
      </ListItemIcon> */}
            <ListItemText
              primary="NFT TYPE"
              sx={{
                transform: "scale(1,0.8)",
                fontWeight: "bold",
                color: nftTypeListOpen ? "#fff" : "inherit",
              }}
            />
            {nftTypeListOpen ? (
              <ExpandLess sx={{ color: "#fff" }} />
            ) : (
              <ExpandMore sx={{ color: "grey" }} />
            )}
          </ListItemButton>

          <Collapse in={nftTypeListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/all");
                  setOpenMarketPlaceDrawer(false);
                }}
              >
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="All" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  navigate("/land");
                  setOpenMarketPlaceDrawer(false);
                }}
              >
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Land" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  navigate("/mysterybox");
                  setOpenMarketPlaceDrawer(false);
                }}
              >
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <FingerprintIcon />
                </ListItemIcon>
                <ListItemText primary="MYSTERY BOX" />
              </ListItemButton>
              <ListItemButton
                onClick={() => {
                  navigate("/equipment");
                  setOpenMarketPlaceDrawer(false);
                }}
              >
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <ColorizeIcon />
                </ListItemIcon>
                <ListItemText primary="EQUIPMENT (353)" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon
                  sx={{ color: (theme) => theme.palette.text.primary }}
                >
                  <VideogameAssetIcon />
                </ListItemIcon>
                <ListItemText primary="COLLECTIONABLES" />
              </ListItemButton>
            </List>
          </Collapse>
          {/* <Divider sx={{ my: 1 }} /> */}
          {/* {secondaryListItems} */}
        </List>
      </Drawer2>
    </>
  );
};

export default MarketPlaceDrawer;
